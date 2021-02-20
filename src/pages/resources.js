import React from 'react'
// import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import SEO from "../components/seo"
import LinkLayout from '../components/LinkLayout'
import Contact from '../components/Contact'
import Horde from '../resources/icons/horde'

const FlexSection = styled.div`
  width: 50%;
`;

export default function ResourcesPage() {
  return (
    <>
      <SEO title="Resources" />
      <h1 className="text-6xl text-center my-16 font-pirata font-medium text-blue-lighter">
        Resources
      </h1>
      <LinkLayout />
      <div className="flex flex-row justify-evenly">
        <FlexSection className="flex flex-col justify-center">
          <h2 className="font-grenze text-blue-lighter text-4xl text-center pt-12">Contact Havamal</h2>
          <Contact />
        </FlexSection>
        <FlexSection className="flex flex-col items-center">
          <h2 className="font-grenze text-blue-lighter text-4xl text-center pt-12">Support Havamal</h2>
          <p className="font-grenze text-white text-3xl text-center mt-12">
            Click the link below to visit bandcamp for Official Havamal merch!
          </p>
          <a href="https://havamal.bandcamp.com/merch" className="font-grenze text-blue-lighter text-center text-3xl">Havamal Merch</a>
          <h2 className="font-grenze text-white text-3xl text-center pt-16">Join the Horde</h2>
          <Horde />
        </FlexSection>
      </div>
    </>
  )
}