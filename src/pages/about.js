// Step 1: Import React
import * as React from 'react'
import Layout from './layout'
import Seo from './seo'

// Step 2: Define your component
const AboutPage = () => {
  return (
    <Layout pageTitle='About Me' title='About me'>
      <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
    </Layout>
  )
}

// Step 3: Export your component
export const Head = () => <Seo title='About me' />
export default AboutPage