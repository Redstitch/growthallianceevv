const path = require('path');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return new Promise((resolve) => {
    graphql(`{
      allWordpressPage(filter: {slug: {ne: "all-components-do-not-delete"}, status: {eq: "publish"}}) {
        edges {
          node {
            slug
            parent_element {
              slug
            }
          }
        }
      }
      allWordpressPost {
        edges {
          node {
            slug
          }
        }
      }
      allWordpressWpEvent {
        edges {
          node {
            slug
          }
        }
      }
    }`).then((results) => {
      results.data.allWordpressPage.edges.forEach(({ node }) => {
        createPage({
          path: `/${node.parent_element ? `${node.parent_element.slug}/` : ''}${node.slug !== 'home' ? node.slug : ''}`,
          component: path.resolve('./src/components/templates/Page.js'),
          context: {
            slug: node.slug,
          },
        });
      });
      results.data.allWordpressPost.edges.forEach(({ node }) => {
        createPage({
          path: `/blog/${node.slug}`,
          component: path.resolve('./src/components/templates/Post.js'),
          context: {
            slug: node.slug,
          },
        });
      });
      results.data.allWordpressWpEvent.edges.forEach(({ node }) => {
        createPage({
          path: `/events/${node.slug}`,
          component: path.resolve('./src/components/templates/Event.js'),
          context: {
            slug: node.slug,
          },
        });
      });
      resolve();
    });
  });
};
