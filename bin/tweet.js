/* eslint-disable import/no-extraneous-dependencies */

const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');
const fm = require('front-matter');
const slug = require('slug');
const Twit = require('twit');

const readFile = file =>
  new Promise((resolve, reject) => {
    fs.readFile(file, 'utf-8', (err, data) => {
      if (err) {
        reject(err);
        return;
      }

      resolve(data);
    });
  });

const getTitle = mdData => {
  const content = fm(mdData);

  return content.attributes.title;
};

const getJargonFromJargonFile = async file => {
  const mdData = await readFile(path.join(__dirname, '..', file));
  const title = getTitle(mdData);
  const jargonSlug = slug(title, { lower: true });

  return {
    title,
    slug: jargonSlug,
    url: `https://jargon.ist/${jargonSlug}`,
  };
};

const tweetJargon = T => jargon =>
  new Promise((resolve, reject) => {
    const status = `Jargon.ist'e ${jargon.title} jargonu eklendi. ${jargon.url}`;

    T.post('statuses/update', { status }, err => {
      if (err) {
        reject(err);
        return;
      }

      resolve();
    });
  });

const getAndTweetJargon = async (file, T) => {
  const jargon = await getJargonFromJargonFile(file);
  await tweetJargon(T)(jargon);
};

const getCommitRange = compareUrl => {
  const parts = compareUrl.split('/');

  return parts[parts.length - 1];
};

const main = async () => {
  const range = getCommitRange(process.env.CIRCLE_COMPARE_URL || '');
  const gitDiff = spawnSync('git', ['diff', '--name-status', range]);

  const addedJargonFiles = gitDiff.stdout
    .toString()
    .split('\n')
    .map(f => {
      const [type, file] = f.split('\t');
      return { type, file };
    })
    .filter(c => c.type === 'A' && /^jargons\//.test(c.file));

  if (addedJargonFiles.length === 0) {
    console.log('There is no new jargon on this build.');
    return;
  }

  const T = new Twit({
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token: process.env.TWITTER_ACCESS_TOKEN,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
  });

  const promises = [];

  addedJargonFiles.forEach(j => {
    console.log(`Started to processing to ${j.file} for a new tweet.`);
    promises.push(getAndTweetJargon(j.file, T));
  });

  await Promise.all(promises);
  console.log('Tweets sent!');
};

main();

/* eslint-enable import/no-extraneous-dependencies */
