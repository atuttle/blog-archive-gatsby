import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="JavaScript and Skydiving" keywords={[`javascript`, `react.js`, `skydiving`]} />
    <h1>Hi people</h1>
  </Layout>
)

export default IndexPage
