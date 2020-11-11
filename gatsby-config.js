/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: 'Gatsby-Bootstrap', // 'gatsby-starter-hello-world',
    description: 'This is the description of our website',
    keywords: 'gatsby, gatsbyjs project, gatsby bootstrap',
    image: '/static/gatsby.jpg',
    url: 'https://www.gatsbyjs.com/',
    author: 'Rangel Stoilov',
    twitter: '@codingsrc',
    youtube: 'https://www.youtube.com/channel/UCOxnPI51rn9SjX5cyAoneug',
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-transformer-remark`, // { resolve: `gatsby-transformer-remark` }
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        baseUrl: `codingsrc.com`, // https://codingsrc.com/
        protocol: `http`, // https
        hostingWPCOM: false,
        includedRoutes: [ // https://stackoverflow.com/questions/48406021/gatsbyjs-wordpress-rest-api-401-unauthorized-error
          "**/posts",
          // "**/pages",
          "**/media",
          "**/categories",
          // "**/tags",
          // "**/taxonomies",
          // "**/users", // uncomment this and watch the warning above reappear!
          // "**/menus",
        ],
      },
    },
    `gatsby-plugin-react-helmet`
  ],
}

{/* <Helmet>
  <title>Gatsby-Bootstrap Wordpress Sourced</title>
  <meta name="description" content="This is the description of our website" />
  <meta name="keywords" content="gatsby, gatsbyjs project, gatsby bootstrap" />
  <meta name="robots" content="index, follow" />
  <meta name=“robots“ content=“noindex, nofollow“>
</Helmet> */}