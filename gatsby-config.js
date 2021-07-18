module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "havamal-v4",
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
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
};
