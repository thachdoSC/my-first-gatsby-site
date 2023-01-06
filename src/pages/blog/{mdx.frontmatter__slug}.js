import * as React from 'react'
import Layout from '../layout'
import { graphql } from 'gatsby'
import Seo from '../seo'

const BlogPost = ({ data, children }) => {
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <p>{data.mdx.frontmatter.date}.</p>
      {children}
    </Layout>
  )
}

export const query = graphql `
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
      excerpt
    }
  }
`

export const Head = ({ data }) => <Seo title={data.mdx.frontmatter.title} />

export default BlogPost