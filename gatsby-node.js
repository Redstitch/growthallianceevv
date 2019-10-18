const path = require('path');

function slugify(string) {
  const a = 'àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìłḿñńǹňôöòóœøōõṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;';
  const b = 'aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnooooooooprrsssssttuuuuuuuuuwxyyzzz------';
  const p = new RegExp(a.split('').join('|'), 'g');

  return string.toString().toLowerCase()
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(p, c => b.charAt(a.indexOf(c))) // Replace special characters
    .replace(/&/g, '-and-') // Replace & with 'and'
    .replace(/[^\w\-]+/g, '') // Remove all non-word characters
    .replace(/\-\-+/g, '-') // Replace multiple - with single -
    .replace(/^-+/, '') // Trim - from start of text
    .replace(/-+$/, ''); // Trim - from end of text
}

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
            acf {
              start_date
              reoccurring_dates {
                date
              }
            }
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
            date: node.acf.start_date,
          },
        });
        if (node.acf.reoccurring_dates) {
          node.acf.reoccurring_dates.forEach(({ date }) => {
            createPage({
              path: `/events/${node.slug}-${slugify(date)}`,
              component: path.resolve('./src/components/templates/Event.js'),
              context: {
                slug: node.slug,
                date,
              },
            });
          });
        }
      });
      resolve();
    });
  });
};
