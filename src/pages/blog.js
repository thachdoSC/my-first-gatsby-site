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
        {data.allFile.nodes.map(blog => <li key={blog.name}>{blog.name}</li>)}
      </ul>
    </Layout>
  )
}

export const query = graphql `
  query {
    allFile {
      nodes {
        name
      }
    }
  }
`

export const Head = () => <Seo title="My Blog Posts" />

export default BlogPage