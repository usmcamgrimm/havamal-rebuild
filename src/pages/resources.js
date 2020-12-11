import React from 'react'

import SEO from "../components/seo"
import Layout from '../components/Layout'
import LinkLayout from '../components/LinkLayout'

const ResourcesPage = () => (
  <>
    <SEO title="Resources" />
    <Layout>
      <h1 className="text-6xl text-center my-16 font-pirata font-medium text-blue-lighter">
        Resources
      </h1>
    <LinkLayout />
    </Layout>
  </>
)

export default ResourcesPage