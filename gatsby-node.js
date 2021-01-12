const path = require('path');

async function newsPostPages({ graphql, actions }) {
  const newsTemplate = path.resolve('./src/templates/News.js');

  const { data } = await graphql(`
    query {
      allSanityNewsPost {
        nodes {
          name
          slug {
            current
          }
        }
      }
    }
  `);
  data.allSanityNewsPost.nodes.forEach((newsPost) => {
    // console.log('Creating news post pages for ', newsPost.name);
    actions.createPage({
      path: `post/${newsPost.slug.current}`,
      component: newsTemplate,
      context: {
        name: newsPost.name,
        slug: newsPost.slug.current,
      }
    })
  })
}

exports.createPages = async function (params) {
  await newsPostPages(params)
}