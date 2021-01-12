import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1 className="font-roboto text-2xl text-white mt-12 text-center">404: Not Found</h1>
    <p className="font-roboto text-xl text-white mt-14 text-center">You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
)

export default NotFoundPage
