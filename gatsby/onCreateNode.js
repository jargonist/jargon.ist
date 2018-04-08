const slug = require('slug');

const onCreateNode = ({ boundActionCreators, getNodes }) => {
  const { createNodeField } = boundActionCreators;

  getNodes()
    .filter(node => node.internal.type === 'MarkdownRemark')
    .forEach(node => {
      const { title, tags = [] } = node.frontmatter;

      createNodeField({
        node,
        name: 'slug',
        value: slug(title, { lower: true }),
      });

      const tagList = tags.map(tag => ({ title: tag, slug: slug(tag, { lower: true }) }));

      createNodeField({
        node,
        name: 'tagList',
        value: tagList,
      });
    });
};

module.exports = onCreateNode;
