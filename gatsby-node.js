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
    // console.log('Creating news post pages for ', newsPost.name);
    actions.createPage({
      path: `post/${newsPost.slug.current}`,
      component: newsTemplate,
      context: {
        slug: newsPost.slug.current,
      }
    })
  })
}

async function bandMemberPages({ graphql, actions }) {
  const bandMemberTemplate = path.resolve('./src/templates/HymnWeaver.js');
  const { data } = await graphql`
    query {
      bandmembers: allSanitybandMembers {
        nodes {
          name
          id
          slug {
            current
          }
        }
      }
    }
  `;
  data.bandmembers.nodes.forEach((bandmember) => {
    actions.createPage({
      component: bandMemberTemplate,
      path: `/HymnWeavers/${bandmember,slug.current}`,
      context: {
        name: bandmember.bandMembers,
        slug: bandmember.slug.current,
      }
    })
  })
}

exports.createPages = async function (params) {
  await Promise.all([
    newsPostPages(params),
    bandMemberPages(params),
  ]) 
}