import React from 'react'

import SEO from "../components/seo"
import Layout from '../components/Layout'

export default function NewsPage() {
  return (
    <>
      <SEO title="News" />
      <Layout>
        <h1 className="text-6xl text-center my-16 font-pirata font-medium text-blue-lighter">
          News
      </h1>
      </Layout>
    </>
  )
}