module.exports = {
  siteMetadata: {
    title: `restaurant-suliko.de`,
    description: `Georgian restaurant Suliko in Hamburg, Germany`,
    author: `@anatol_kerbs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
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
        name: `restaurant-suliko.de`,
        short_name: `suliko`,
        start_url: `/`,
        background_color: `rgba(249,234,207)`,
        theme_color: `rgba(249,234,207)`,
        display: `minimal-ui`,
        icon: `src/images/suliko-icon.png`, // This path is relative to the root of the site.
      },
    },

    `gatsby-plugin-smoothscroll`,

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
