import { GatsbyImage } from 'gatsby-plugin-image'
import { StaticQuery, graphql } from 'gatsby'
import React from 'react'

const Image = () => (
  <StaticQuery
    query={graphql`
      {
        placeholderImage: file(relativePath: { eq: "site-icon.png" }) {
          childImageSharp {
            gatsbyImageData(width: 300, layout: CONSTRAINED)
          }
        }
      }
    `}
    render={data => (
      <GatsbyImage
        fluid={data.placeholderImage.childImageSharp.gatsbyImageData}
      />
    )}
  />
)
export default Image
