import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/Layout'
import SEO from '../components/seo'
import styled from 'styled-components'

const LogoSection = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;

`;

const LogoWrapper = styled.div`
  .gatsby-image-wrapper {
    max-width: 1200px;
    height: auto;
  };
  @media screen and (max-width: 500px) {
    .gatsby-image-wrapper {
      max-width: 400px;
      height: auto;
    }
  }
`;

export default function IndexPage() {
  const data = useStaticQuery(graphql`
    query {
      HavamalLogo: file(relativePath: { eq: "images/havamal_bg.png" }) {
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
      <Layout>
        <SEO title="Home" />
        <LogoSection>
          <LogoWrapper>
            <Img fluid={data.HavamalLogo.childImageSharp.fluid} />
          </LogoWrapper>
          <h1 className="text-6xl text-center font-pirata text-blue-lighter">Hail, Hordes of Havamal!</h1>
        </LogoSection>
      </Layout>
    </>
  )
}
