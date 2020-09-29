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
    {
      resolve: `gatsby-plugin-gdpr-cookies`,
      options: {
        googleAnalytics: {
          trackingId: "UA-176078108-1", // leave empty if you want to disable the tracker
          cookieName: "gatsby-gdpr-google-analytics", // default
          anonymize: true, // default
        },

        // googleTagManager: {
        //   trackingId: "YOUR_GOOGLE_TAG_MANAGER_TRACKING_ID", // leave empty if you want to disable the tracker
        //   cookieName: "gatsby-gdpr-google-tagmanager", // default
        //   dataLayerName: "dataLayer", // default
        // },
        // facebookPixel: {
        //   pixelId: "YOUR_FACEBOOK_PIXEL_ID", // leave empty if you want to disable the tracker
        //   cookieName: "gatsby-gdpr-facebook-pixel", // default
        // },
        // defines the environments where the tracking should be available  - default is ["production"]
        environments: ["production", "development"],
      },
    },
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/layout.js`),
      },
    },
    // In your gatsby-config.js

    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     trackingId: "UA-176078108-1",
    //     head: true,
    //     anonymize: true,
    //     respectDNT: true,
    //     pageTransitionDelay: 0,
    //   },
    // },
    // "gatsby-plugin-preload-link-crossorigin",

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
