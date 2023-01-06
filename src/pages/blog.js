import * as React from 'react'
import Layout from './layout'
import Seo from './seo'
import { graphql } from 'gatsby'

const BlogPage = ({ data }) => {
  console.log('DATA', data)
  return (
    <Layout pageTitle="My Blog Posts">
      <p>My cool posts will go in here</p>
      <ul>
        {data.allMdx.nodes.map(node => <li key={node.id}>{node.frontmatter.title}</li>)}
      </ul>
    </Layout>
  )
}

export const query = graphql `
  query {
    allMdx(sort: {frontmatter: {date: DESC}}) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          slug
          title
        }
        id
        excerpt
      }
    }
  }
`

export const Head = () => <Seo title="My Blog Posts" />

export default BlogPage