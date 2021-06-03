import { graphql, useStaticQuery } from 'gatsby'
import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import React from 'react'

import ContentMenuItem from './ContentMenuItem'
import buildMenuHierarchy from './contentMenu/buildMenuHierarchy'

const useStyles = makeStyles({
  appMenu: {
    width: '100%',
  },
})

const ContentMenu = () => {
  const classes = useStyles()

  const Pages = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: {
          fields: { slug: { ne: "/", regex: "/^((?!404).)*$/" } }
          frontmatter: { published: { eq: true } }
        }
      ) {
        nodes {
          fields {
            slug
          }
          frontmatter {
            title
            tags
            menus
            navPriority
            navTitle
          }
        }
      }
    }
  `)

  const staticMenu = buildMenuHierarchy(Pages.allMarkdownRemark.nodes)

  return (
    <>
      <List component="nav" className={classes.appMenu} disablePadding>
        {staticMenu.map(node => (
          <ContentMenuItem
            name={node.name}
            linkRoute={node.linkRoute}
            subItems={node.subItems}
            key={node.key}
          />
        ))}
      </List>
    </>
  )
}

export default ContentMenu
