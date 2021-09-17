require('dotenv').config();

module.exports = {
  siteMetadata: {
    siteUrl: "https://www.havamalband.com",
    title: "Havamal",
  },
  plugins: [
    "gatsby-plugin-emotion",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/resources/",
      },
      __key: "images",
    },
    {
      resolve: `gatsby-source-cloudinary`,
      options: {
        cloudName: process.env.CLOUDINARY_CLOUD_NAME,
        apiKey: process.env.CLOUDINARY_API_KEY,
        apiSecret: process.env.CLOUDINARY_API_SECRET,
        resourceType: `image`,
        prefix: `havamal/`,
        maxResults: 50,
      }
    },
    {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: `v5p9avbf`,
        dataset: `production`,
        watchMode: true,
        token: process.env.SANITY_TOKEN,
      }
    },
  ],
};
