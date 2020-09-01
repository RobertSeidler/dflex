require("dotenv").config();
const config = require("./config");

const plugins = [
  "gatsby-plugin-sitemap",
  "gatsby-plugin-sharp",
  "gatsby-plugin-emotion",
  "gatsby-plugin-react-helmet",
  {
    resolve: "gatsby-source-filesystem",
    options: {
      name: "docs",
      path: `${__dirname}/content/`,
    },
  },
  {
    resolve: "gatsby-plugin-mdx",
    options: {
      pathToConfigModule: "src/typography",
      defaultLayouts: {
        default: require.resolve("./src/templates/docs.js"),
      },
      gatsbyRemarkPlugins: [
        {
          resolve: "gatsby-remark-images",
          options: {
            maxWidth: 1035,
            sizeByPixelDensity: true,
          },
        },
        {
          resolve: "gatsby-remark-copy-linked-files",
        },
      ],
      extensions: [`.mdx`, `.md`],
    },
  },
  {
    resolve: "gatsby-plugin-web-font-loader",
    options: {
      google: {
        families: ["Roboto Mono"],
      },
    },
  },
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: `DFlex`,
      short_name: `DFlex`,
      start_url: `/`,
      background_color: "#40241a",
      theme_color: "#40241a",
      display: `minimal-ui`,
    },
  },
  {
    resolve: `gatsby-plugin-page-creator`,
    options: {
      path: `${__dirname}/src/templates/docs.js`,
    },
  },
  {
    resolve: `gatsby-plugin-gtag`,
    options: {
      trackingId: config.gatsby.trackingId,
      head: true,
      anonymize: false,
    },
  },
];

module.exports = {
  pathPrefix: config.gatsby.pathPrefix,
  siteMetadata: {
    title: config.siteMetadata.title,
    description: config.siteMetadata.description,
    docsLocation: config.siteMetadata.docsLocation,
    ogImage: config.siteMetadata.ogImage,
    favicon: config.siteMetadata.favicon,
    author: config.siteMetadata.author,

    githubUrl: config.header.githubUrl,
    helpUrl: config.header.helpUrl,
    tweetText: config.header.tweetText,

    siteUrl: config.gatsby.siteUrl,
  },
  plugins,
};
