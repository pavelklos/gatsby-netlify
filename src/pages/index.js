import React from "react"
import Post from "../components/Post"
import PrimaryLayout from "../layouts/PrimaryLayout"
import { graphql } from "gatsby"
// import { Helmet } from 'react-helmet'

export default ({ data }) => { // props.data from graphql
  // console.log(data)
  return (
    <PrimaryLayout column="col-md-10">
      {/* <Helmet>
        <title>Gatsby-Bootstrap Wordpress Sourced</title>
        <meta name="description" content="This is the description of our website" />
        <meta name="keywords" content="gatsby, gatsbyjs project, gatsby bootstrap" />
        <meta name="robots" content="index, follow" />
        <meta name=“robots“ content=“noindex, nofollow“>
      </Helmet> */}
      {/* [WP = WordpressPost] */}
      <h1>[WP = WordpressPost]</h1>
      {data.allWordpressPost.nodes.map(node => (
        <Post
          key={node.slug}
          src={node.featured_media.source_url}
          title={node.title}
          excerpt={node.excerpt}
          readMore={node.slug}
        // excerpt={node.html}
        />
      ))}

      {/* [MD = MarkdownRemark] */}
      <h1>[MD = MarkdownRemark]</h1>
      {data.allMarkdownRemark.nodes.map(node => (
        <Post
          key={node.fields.slug}
          src={node.frontmatter.image}
          title={node.frontmatter.title}
          excerpt={node.excerpt}
          readMore={node.fields.slug}
        // excerpt={node.html}
        />
      ))}

      {/* [STATIC FOLDER] */}
      <h1>[STATIC FOLDER]</h1>
      <Post
        src="gatsby.png"
        title="This is our first post"
        excerpt="We are writing something to be displayed in our excerpt"
        readMore='#'
      />
      <Post
        src="gatsby.jpg"
        title="This is our second post"
        excerpt="We are writing something to be displayed in our excerpt"
        readMore='#'
      />
      {/* This is where our content will go! */}
      {/* <h1>First Gatsby Project</h1> */}
      {/* <a href="http://google.com">Go to Google</a> */}
      {/* <hr /> */}
      {/* <img src="https://static.rogerebert.com/uploads/review/primary_image/reviews/the-great-gatsby-2013/gatsbywide.png" width="700" alt="gatsby1" /> */}
      {/* <img src="https://www.gannett-cdn.com/-mm-/b50a3f1307fd26519e0896747fdc0304b5dea311/c=0-24-3000-1716/local/-/media/USATODAY/USATODAY/2014/09/09/1410282857000-AP-Film-DiCaprio-Maguire_001.jpg?width=3000&height=1692&fit=crop&format=pjpg&auto=webp" width="700" alt="gatsby2" /> */}
    </PrimaryLayout>
  )
}

// [WP = WordpressPost]
export const query = graphql`
{
  allWordpressPost {
    nodes {
      slug
      title
      excerpt
      featured_media {
        source_url
      }
    }
  }
  allMarkdownRemark {
    nodes {
      frontmatter {
        title
        date
        keywords
        image
      }
      excerpt
      html
      fields {
        slug
      }
    }
  }
}
`
// // [MD = MarkdownRemark]
// export const query = graphql`
// {
//   allMarkdownRemark {
//     nodes {
//       frontmatter {
//         title
//         date
//         keywords
//         image
//       }
//       excerpt
//       html
//       fields {
//         slug
//       }
//     }
//   }
// }
// `

// export default function Home() {
//   return <div>Hello world! [pavelklos.com] {new Date().toLocaleString()}</div>
// }