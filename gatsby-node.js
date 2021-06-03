const path = require('path')

const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: 'pages' })
    createNodeField({
      node,
      name: 'slug',
      value: slug,
    })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise(resolve => {
    graphql(`
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___title], order: ASC }
          filter: { frontmatter: { published: { eq: true } } }
        ) {
          edges {
            node {
              id
              excerpt
              fields {
                slug
              }
              frontmatter {
                title
                tags
                menus
                navTitle
                published
              }
            }
          }
        }
      }
    `).then(result => {
      const posts = result.data.allMarkdownRemark.edges

      posts.forEach(({ node }) => {
        if (!node.frontmatter.title) {
          throw new Error(`No title for ${node.fields.slug}`)
        }

        createPage({
          path: node.fields.slug,
          component: path.resolve(`./src/templates/playbook.js`),
          context: {
            // Data passed to context is available
            // in page queries as GraphQL variables.
            slug: node.fields.slug,
          },
        })
      })
      resolve()
    })
  })
}
