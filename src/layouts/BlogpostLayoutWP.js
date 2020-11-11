import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { graphql } from "gatsby"
import SEO from '../components/SEO'
import innertext from 'innertext'

const BlogpostLayoutWP = ({ data }) => { // props.data
  const post = data.wordpressPost
  return (
    <div>
      <SEO
        title={innertext(post.title)}
        description={innertext(post.excerpt)}
        image={post.featured_media.source_url}
        keywords={post.categories.map(res => res.name).join(', ')}

      />
      <Header />
      <div className="container">
        <div className="row justify-content-md-center">
          {/* <div>Hello, this is a blogpost page!</div> */}
          <h1 dangerouslySetInnerHTML={{ __html: post.title }} />
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
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

export default BlogpostLayoutWP

export const query = graphql`
  query($slug: String!) {
    wordpressPost(slug: {eq: $slug}) {
      content
      title
      featured_media {
        source_url
      }
      categories {
        name
      }
      excerpt
    }
  }
`

// wordpressPost(slug: {eq: "solidity-tutorial"}) {
//   content
//   title
//   featured_media {
//     source_url
//   }
//   categories {
//     name
//   }
//   excerpt
// }
