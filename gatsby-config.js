module.exports = {
  siteMetadata: {
    title: "Penpal with me",
    description: "",
    url: "https://www.penpalwith.me",
    twitterUsername: "",
  },
  plugins: [
    `gatsby-plugin-sass`,
    `react-helmet`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts`,
      },
    },
  ],
};
