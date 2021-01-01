import React from 'react'

import SEO from "../components/seo"
import Layout from '../components/Layout'
import LinkLayout from '../components/LinkLayout'
import Contact from '../components/contact'

const ResourcesPage = () => (
  <>
    <SEO title="Resources" />
    <Layout>
      <h1 className="text-6xl text-center my-16 font-pirata font-medium text-blue-lighter">
        Resources
      </h1>
    <LinkLayout />
    <div>
      <h1 className="font-grenze text-blue-lighter text-6xl text-center pt-12">Contact Us</h1>
    </div>
    <Contact />
    </Layout>
  </>
)

export default ResourcesPage