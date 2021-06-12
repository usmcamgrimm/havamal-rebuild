import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import styled from 'styled-components'

import SEO from "../components/seo"
import LinkLayout from '../components/LinkLayout'
import Contact from '../components/Contact'

const NidhoggrHavamal = styled.div`
  display: flex;
  justify-content: center;
  z-index: -99;
`;

const FlexContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  margin: 0 auto;
  padding: 0 2rem;
  z-index: 2;
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
  z-index: 2;
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
  return (
    <>
      <SEO title="Resources" />
      <h1 className="text-6xl text-center my-16 font-pirata font-medium text-blue-lighter">
        Resources
      </h1>
      <LinkLayout />
      <NidhoggrHavamal>
        <StaticImage
          src="../resources/images/Nidhoggr.jpg"
          alt="A graphic of the mighty Nidhoggr and the Havamal logo"
          layout="fullWidth"
        />
      </NidhoggrHavamal>
      <FlexContainer>
        <FlexSection>
          <h2 className="font-grenze text-blue-lighter text-4xl text-center pt-12">Contact Havamal</h2>
          <Contact />
        </FlexSection>
        <FlexSection>
          <h2 className="font-grenze text-blue-lighter text-4xl text-center pt-12">Support Havamal</h2>
          <p className="font-grenze text-white text-3xl text-center mt-12">
            The Shadow Chapter now available!
          </p>
          <p className="font-grenze text-white text-3xl text-center mt-12">
            Check out the links below for official HAVAMAL merch!
          </p>
          <a href="https://havamal.bandcamp.com/merch" className="font-grenze text-blue-lighter text-center text-3xl">Havamal on Bandcamp</a>
          <a href="https://artgatesrecords.com/store/en/havamal" className="font-grenze text-blue-lighter text-center text-3xl">Havamal at Art Gates Records</a>
          <h2 className="banner font-grenze text-white text-3xl text-center pt-16">Join the Horde</h2>
          <a href="https://facebook.com/groups/338634033565609" target="_blank" rel="noreferrer">
            <StaticImage
              src="../resources/icons/horde.png"
              alt="hordes of havamal facebook group icon"
              layout="fixed"
              width={250}
            />
          </a>
        </FlexSection>
      </FlexContainer>
    </>
  )
}