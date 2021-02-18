import React from 'react'

import SEO from "../components/seo"
import LinkLayout from '../components/LinkLayout'
import Contact from '../components/Contact'

export default function ResourcesPage() {
  return (
    <>
      <SEO title="Resources" />
      <h1 className="text-6xl text-center my-16 font-pirata font-medium text-blue-lighter">
        Resources
      </h1>
      <LinkLayout />
      <div className="flex flex-row justify-evenly">
        <div className="flex flex-col justify-center">
          <h2 className="font-grenze text-blue-lighter text-4xl text-center pt-12">Contact Havamal</h2>
          <Contact />
        </div>
        <div className="flex flex-col items-center">
          <h2 className="font-grenze text-blue-lighter text-4xl text-center pt-12">Support the Band!</h2>
        </div>
      </div>
    </>
  )
}