const { createFilePath } = require('gatsby-source-filesystem')
const { Component } = require('react')
const path = require('path')

exports.onCreateNode = ({ node, getNode, actions }) => {
  // console.log('[gatsby-node.js] onCreateNode = ', node.internal.type)
  const { createNodeField } = actions
  if (node.internal.type === "MarkdownRemark") {
    // console.log(createFilePath({ node, getNode, basePath: "posts" })) // directory 'posts'
    const slug = createFilePath({ node, getNode, basePath: "posts" })
    createNodeField({
      node,
      name: "slug",
      value: slug
    })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    {
      allMarkdownRemark {
        nodes {
          fields {
            slug
          }
        }
      }
      allWordpressPost {
        nodes {
          slug
        }
      }
    }
  `).then(result => {
    result.data.allMarkdownRemark.nodes.forEach((node) => {
      createPage({
        path: node.fields.slug,
        component: path.resolve('./src/layouts/BlogpostLayout.js'),
        context: {
          slug: node.fields.slug,
        }
      })
    })
    result.data.allWordpressPost.nodes.forEach((node) => {
      createPage({
        path: node.slug,
        component: path.resolve('./src/layouts/BlogpostLayoutWP.js'),
        context: {
          slug: node.slug,
        }
      })
    })
  })
}