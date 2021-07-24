module.exports = {
  siteMetadata: {
    siteUrl: "https://www.havamalband.com",
    title: "Havamal",
  },
  plugins: [
    {
      resolve: "gatsby-source-datocms",
      options: {
        apiToken: "d5a27da30d3916ea38abc0ab6bbbe7",
      },
    },
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
  ],
};
