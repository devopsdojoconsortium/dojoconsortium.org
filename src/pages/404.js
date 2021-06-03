import React from 'react'

import Layout from '../components/NavLayout'
import PostWrapper from '../components/PostWrapper'
import SEO from '../components/seo'

const NotFoundPage = () => (
  <Layout>
    <PostWrapper>
      <SEO title="404: Not found" />
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </PostWrapper>
  </Layout>
)

export default NotFoundPage
