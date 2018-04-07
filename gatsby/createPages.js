const { resolve } = require('path');

const createPages = async ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;

  const jargonsTemplate = resolve(__dirname, '../src/templates/jargons.js');
  const jargonTemplate = resolve(__dirname, '../src/templates/jargon.js');
  const tagsTemplate = resolve(__dirname, '../src/templates/tags.js');
  const tagTemplate = resolve(__dirname, '../src/templates/tag.js');

  const allMarkdown = await graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            fields {
              slug
              tagList {
                title
                slug
              }
            }
            frontmatter {
              title
              tags
            }
          }
        }
      }
    }
  `);

  if (allMarkdown.errors) {
    throw Error(allMarkdown.errors);
  }

  const tagList = [];
  const jargonList = [];

  allMarkdown.data.allMarkdownRemark.edges.forEach(({ node }) => {
    jargonList.push({
      title: node.frontmatter.title,
      slug: node.fields.slug,
    });

    node.fields.tagList.forEach(tag => {
      if (tagList.findIndex(t => t.slug === tag.slug) === -1) {
        tagList.push(tag);
      }
    });

    // Jargon Detail
    createPage({
      path: node.fields.slug,
      component: jargonTemplate,
      context: {
        slug: node.fields.slug,
      },
    });
  });

  // All Jargons
  createPage({
    path: '/dizin',
    component: jargonsTemplate,
    context: {
      jargonList,
    },
  });

  // All Tags
  createPage({
    path: '/etiketler',
    component: tagsTemplate,
    context: {
      tagList,
    },
  });

  // Tag Detail
  tagList.forEach(tag => {
    createPage({
      path: `/e/${tag.slug}`,
      component: tagTemplate,
      context: {
        tag: tag.title,
      },
    });
  });
};

module.exports = createPages;
