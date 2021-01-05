
module.exports = {
  siteMetadata: {
    title: "Marinaz Chamlou Dentiste",
  },
  plugins: [
    {
      resolve: 'gatsby-source-graphcms',
      options: {
        endpoint: "https://api-eu-central-1.graphcms.com/v2/ckjk85mzfkzjb01xpb0s92h9u/master",
      },
    },
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "to-change",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
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
