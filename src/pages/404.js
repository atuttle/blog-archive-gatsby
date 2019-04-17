import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>Something went terribly wrong</h1>
    <p>I couldn't find the page you're looking for. Maybe this will make up for it?</p>
    <iframe title="YouTube video: Something went terribly wrong" width="560" height="315" src="https://www.youtube.com/embed/t3otBjVZzT0" frameborder="0" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>
  </Layout>
)

export default NotFoundPage
