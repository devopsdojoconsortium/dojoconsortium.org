import Divider from '@material-ui/core/Divider'
import React from 'react'

import Layout from '../components/NavLayout'
import PostWrapper from '../components/PostWrapper'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <PostWrapper>
      <h2>Recommended Practices for Daily Value Delivery</h2>
      <p>
        The goal of this site is to share recommendations to improve the flow of
        delivery from idea to end user. It is critical that the feedback loop
        between the team and the end-user be established as early as possible
        and that we can get feedback as frequently as possible on the work we
        are doing. The tips and techniques shared here are well tested solutions
        to the most common problems.
      </p>
      <h3>Common Struggles with Continuous Delivery</h3>
      <p>
        As teams begin to focus on gaining the quality and stability benefits
        that come from rapid delivery of small batches of work, they will
        encounter some very common issues.
        <ul>
          <li>
            It takes too long to verify each build because we lack confidence in
            our testing.
          </li>
          <li>
            We lack confidence in our testing because we do not have a stable
            quality signal.
          </li>
          <li>
            Our quality signal is unstable because we have poor test
            architecture.
          </li>
          <li>
            We cannot integrate code frequently because we do not know how to
            engineer for missing dependencies
          </li>
          <li>
            We cannot execute test driven development because the requirements
            are unclear
          </li>
          <li>
            The requirements are unclear because our stories are too big and
            because we do not work aas a team to uncover the testable outcomes
          </li>
          <li>
            We do not work as a team because each team member has assigned work
            for each sprint.
          </li>
        </ul>
      </p>

      <Divider />
    </PostWrapper>
  </Layout>
)

export default IndexPage
