const path = require('path');
const graphql = require('gatsby').graphql

async function newsPostPages({ graphql, actions }) {
  const newsTemplate = path.resolve('./src/templates/News.js');

  const { data } = await graphql(`
    query {
      updates: allSanityNewsPost {
        nodes {
          name
          slug {
            current
          }
        }
      }
    }
  `);
  data.updates.nodes.forEach((newsPost) => {
    actions.createPage({
      path: `post/${newsPost.slug.current}`,
      component: newsTemplate,
      context: {
        slug: newsPost.slug.current,
      }
    })
  })
}

exports.createPages = async function (params) {
  await Promise.all([
    newsPostPages(params),
  ])
}