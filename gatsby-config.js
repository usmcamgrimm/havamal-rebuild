module.exports = {
  siteMetadata: {
    title: `HAIL HAVAMAL`,
    description: `Havamal is a band hailing from Sweden, with musical themes inspired by the old ways of the Norse. The hymn-weavers spin tales of the Gods and of Vikings, set in crushing melodic death metal. Discography includes Call of the North and Tales From Yggdrasil.`,
    author: `Adrian Grimm`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-purgecss`,
      options: { tailwind: true }
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [require('tailwindcss'), require('./tailwind.config.js'), require('autoprefixer')],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `HAIL HAVAMAL`,
        short_name: `HAVAMAL`,
        start_url: `/`,
        background_color: `#0e181f`,
        theme_color: `#0e181f`,
        display: `minimal-ui`,
        icon: `src/resources/icons/tabIcon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
