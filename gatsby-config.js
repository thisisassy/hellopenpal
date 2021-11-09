module.exports = {
  siteMetadata: {
    title: "Penpal with me",
    description: "Penpalwithmeは海外文通をはじめたい人、手紙で交流したい人のための文通サイトです",
    siteUrl: "https://www.penpalwith.me",
    twitterUsername: "@harukaashiuchi",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        trackingId: `G-G5CYNEJTXM`,
        head: true,
      },
    },
    `gatsby-plugin-sass`,
    `react-helmet`,
    `gatsby-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
              quality: 90,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `sitemap.xml`,
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        name: `Penpal with me`,
        short_name: `Penpal with me`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#430`,
        display: `standalone`,
        icon: `src/images/favicon.png`,
      },
    },
  ],
};
