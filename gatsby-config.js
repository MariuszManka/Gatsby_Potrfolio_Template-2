require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    "gatsby-plugin-root-import",
    `gatsby-plugin-smoothscroll`,
    {
      resolve: `gatsby-plugin-scroll-reveal`,
      options: {
        threshold: 0.6, // Percentage of an element's area that needs to be visible to launch animation
        once: true, // Defines if animation needs to be launched once
        disable: false, // Flag for disabling animations

        // // Advanced Options
        // selector: '[data-sal]', // Selector of the elements to be animated
        // animateClassName: 'sal-animate', // Class name which triggers animation
        // disabledClassName: 'sal-disabled', // Class name which defines the disabled state
        // rootMargin: '0% 50%', // Corresponds to root's bounding box margin
        // enterEventName: 'sal:in', // Enter event name
        // exitEventName: 'sal:out', // Exit event name
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Montserrat`,
            variants: [`400`, `600`, `800`],
            subsets: ["latin-ext"],
          },
          {
            family: `Raleway`,
            variants: [`600`, `800`],
            subsets: ["latin-ext"],
          },
        ],
      },
    },

    {
      resolve: "gatsby-plugin-google-fonts",
      options: {
        fonts: ["material icons", "roboto:300,400,500,700"],
      },
    },
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: process.env.API_KEY,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `william-page`,
        short_name: `william`,
        start_url: `/`,
        background_color: `#000`,
        theme_color: `#000`,
        display: `minimal-ui`,
        // icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
