const path = require('path');

async function newsPostPages({ graphql, actions }) {
  const newsTemplate = path.resolve('./src/templates/News.js');
  const { data } = await graphql(`
    query {
      news: allSanityNewsPost {
        nodes {
          name
          slug {
            current
          }
        }
      }
    }
  `);
  data.news.nodes.forEach((newsPost) => {
    actions.createPage({
      path: `newsPost/${newsPost.slug.current}`,
      component: newsTemplate,
      context: {
        slug: newsPost.slug.current,
      }
    })
  })
}

exports.createPages = async function (params) {
  await newsPostPages(params)
}