import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { graphql } from "gatsby"
import SEO from '../components/SEO'

const BlogpostLayout = ({ data }) => { // props.data
  const post = data.markdownRemark
  return (
    <div>
      <SEO />
      <Header />
      <div className="container">
        <div className="row justify-content-md-center">
          {/* <div>Hello, this is a blogpost page!</div> */}
          <h1>{post.frontmatter.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
          {/* <div className={props.column}>
            <div className="pt-3">
              {props.children}
            </div>
          </div> */}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default BlogpostLayout

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: {slug: {eq: $slug}}) {
      html
      frontmatter {
        title
      }
    }
  }
`

// markdownRemark(fields: {slug: {eq: "/second-blogpost/"}}) {
//   fields {
//     slug
//   }
//   html
//   frontmatter {
//     title
//     date
//     keywords
//     image
//   }
// }