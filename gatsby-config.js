require('dotenv')

const endpoint =
  process.env.NODE_ENV === 'production'
    ? 'https://whattopackserver.herokuapp.com'
    : 'http://localhost:4000'

module.exports = {
  siteMetadata: {
    title: 'What To Pack App',
    author: 'What To Pack App',
    description:
      "Ever wonder if you're missing something to pack for your trip? Use this website to find all the items you need to pack for your next trip!.",
    siteUrl: 'https://whattopack.app/',
  },
  pathPrefix: '/',
  plugins: [
    'gatsby-plugin-react-svg',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'queries',
        path: `${__dirname}/src/queries/`,
      },
    },
    {
      resolve: '@wyze/gatsby-source-graphql',
      options: {
        url: endpoint,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Starter Blog`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/assets/gatsby-icon.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography',
      },
    },
  ],
}
