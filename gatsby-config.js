module.exports = {
  siteMetadata: {
    title: `Royatul Aliyah`,
    description: `Website Angkatan 6 SMAN 1 Sumatera Barat`,
    author: `@royatulaliyah`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Royatul Aliyah`,
        short_name: `Royah`,
        start_url: `/`,
        background_color: `#FFFFFF`,
        theme_color: `#4DC8C6`,
        display: `standalone`,
        icon: `src/images/royah-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    `gatsby-plugin-offline`,
    "gatsby-plugin-postcss",
    `gatsby-plugin-netlify`,
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
  ],
}
