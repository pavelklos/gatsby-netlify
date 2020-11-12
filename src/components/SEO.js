import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { Helmet } from 'react-helmet'

// const SEO = () => {
const SEO = ({ title, description, keywords, image }) => {
  return <StaticQuery
    query={query}
    render={({
      site: {
        siteMetadata: {
          defaultTitle,
          defaultDescription,
          defaultImage,
          url,
          defaultKeywords
        }
      }
    }) => {
      const seo = {
        title: title || defaultTitle,
        description: description || defaultDescription,
        image: `${image ? image : url + defaultImage}`,
        keywords: keywords || defaultKeywords
      }
      return (
        <div>
          <Helmet>
            {/* <title>Gatsby-Bootstrap Wordpress Sourced</title> */}
            <title>{seo.title}</title>
            <meta name="image" content={seo.image} />
            {/* <meta name="description" content="This is the description of our website" /> */}
            <meta name="description" content={seo.description} />
            {/* <meta name="keywords" content="gatsby, gatsbyjs project, gatsby bootstrap" /> */}
            <meta name="keywords" content={seo.keywords} />
            <meta name="robots" content="index, follow" />
            {/* <meta name=“robots“ content=“noindex, nofollow“> */}
            <html lang="en" />
          </Helmet>
        </div>
      )
    }}
  />
}
export default SEO

const query = graphql`
{
  site {
    siteMetadata {
      defaultTitle: title
      defaultDescription: description
      defaultImage: image
      url
      defaultKeywords: keywords
    }
  }
}
`