const path = require('path');

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

async function HymnWeaverPages({ graphql, actions }) {
  const hymnweaverTemplate = path.resolve('./src/templates/HymnWeaver.js');
  const { data } = await graphql(`
    query {
      hymnweavers: allSanityBand {
        nodes {
          name
          id
          slug {
            current
          }
        }
      }
    }
  `);
  data.hymnweavers.nodes.forEach((band) => {
    actions.createPage({
      path: `/hymnweavers/${band.slug.current}`,
      component: hymnweaverTemplate,
      context: {
        slug: band.slug.current,
      }
    })
  })
}

exports.createPages = async function (params) {
  await Promise.all([
    newsPostPages(params),
    HymnWeaverPages(params),
  ])
}