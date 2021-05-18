import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

import SEO from "../components/seo"
import LinkLayout from '../components/LinkLayout'
import Contact from '../components/Contact'
import Horde from '../resources/icons/horde'

const FlexContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  margin: 0 auto;
  padding: 0 2rem;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
    left: 0;
  }
  @media screen and (min-width: 1025px) {
    margin-top: -8rem;
  }
`;

const FlexSection = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  @media screen and (max-width: 768px) {
    width: 100%;
    p {
      margin-top: 12px;
      font-size: 1.5rem;
    }
    h2.banner {
      padding-top: 8px;
    }
  }
`;

export default function ResourcesPage() {
  const data = useStaticQuery(graphql`
  query {
    Nidhoggr: file(relativePath: { eq: "images/Nidhoggr.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid_noBase64
          ...GatsbyImageSharpFluidLimitPresentationSize
        }
      }
    }
  }
  `)

  return (
    <>
      <SEO title="Resources" />
      <h1 className="text-6xl text-center my-16 font-pirata font-medium text-blue-lighter">
        Resources
      </h1>
      <LinkLayout />
      <Img
        fluid={data.Nidhoggr.childImageSharp.fluid}
        className="container mx-auto my-16"
      />
      <FlexContainer>
        <FlexSection>
          <h2 className="font-grenze text-blue-lighter text-4xl text-center pt-12">Contact Havamal</h2>
          <Contact />
        </FlexSection>
        <FlexSection>
          <h2 className="font-grenze text-blue-lighter text-4xl text-center pt-12">Support Havamal</h2>
          <p className="font-grenze text-white text-3xl text-center mt-12">
            Click the link below to visit bandcamp for Official Havamal merch!
          </p>
          <a href="https://havamal.bandcamp.com/merch" className="font-grenze text-blue-lighter text-center text-3xl">Havamal Merch</a>
          <h2 className="banner font-grenze text-white text-3xl text-center pt-16">Join the Horde</h2>
          <Horde />
        </FlexSection>
      </FlexContainer>
    </>
  )
}