require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: `Monggofits`,
    description: `Monggofits, Clothing Line, Local Madness, Local Pride, Local Brand, Hype Beast`,
    author: `@monggofits`,
    siteUrl: `https://monggofits.com`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-material-ui`,
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: [
            "Roboto Mono:n7,n6,n5,n4,n3,i7,i6,i5,i4,i3:latin",
            "Roboto Slab:n7,n6,n5,n4,n3,i7,i6,i5,i4,i3:latin",
          ],
        },
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `${process.env.GATSBY_STRAPI_URL}`,
        queryLimit: 5000, // Defaults to 100
        collectionTypes: [
          `product`,
          `category`,
          `variant`,
          `term-and-conditions`,
          `faqs`,
        ],
      },
    },
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`],
          placeholder: "blurred",
          breakpoints: [300, 600, 960, 1280, 1920],
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
