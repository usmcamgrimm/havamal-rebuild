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
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
`;

export default function IndexPage() {
  const data = useStaticQuery(graphql`
    query {
      mobileLogo: file(relativePath: { eq: "images/havamal_bg.png" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid_noBase64
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
      tabletLogo: file(relativePath: { eq: "images/havamal_bg.png" }) {
        childImageSharp {
          fluid(maxWidth: 5500) {
            ...GatsbyImageSharpFluid_noBase64
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
      desktopLogo: file(relativePath: { eq: "images/havamal_bg.png" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid_noBase64
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      } 
    }
  `)

  const logos = [
    data.mobileLogo.childImageSharp.fluid,
    {
      ...data.tabletLogo.childImageSharp.fluid,
      media: `(min-width: 601px)`,
    },
    {
      ...data.desktopLogo.childImageSharp.fluid,
      media: `(min-width: 769px)`,
    },
  ]

  return (
    <>
      <Layout>
        <SEO title="Home" />
        <LogoSection>
          <Img fluid={logos} alt="Havamal logo" />
          <h1 className="text-4xl text-center font-pirata text-blue-lighter">Hail, Hordes of Havamal!</h1>
        </LogoSection>
      </Layout>
    </>
  )
}
