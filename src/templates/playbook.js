/* eslint-disable react/no-danger */
import { graphql } from 'gatsby'
import React from 'react'

import Layout from '../components/NavLayout'
import PostWrapper from '../components/PostWrapper'

const BlogPosts = ({ data }) => {
  const post = data.markdownRemark

  return (
    <Layout>
      <PostWrapper>
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <hr />
        {/* <p>
          <StyledTag>Tags</StyledTag>: <PostTags tags={post.frontmatter.tags} />
        </p> */}
      </PostWrapper>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        tags
      }
    }
  }
`
export default BlogPosts
