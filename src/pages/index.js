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
      HavamalLogo: file(relativePath: { eq: "images/havamal_bg.png" }) {
        childImageSharp {
          fluid(sizes: "(max-width: 500px) 400px, (max-width: 768px) 550px, (min-width: 1024px) 100vw") {
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
          <Img fluid={data.HavamalLogo.childImageSharp.fluid} />
          <h1 className="text-4xl text-center font-pirata text-blue-lighter">Hail, Hordes of Havamal!</h1>
        </LogoSection>
      </Layout>
    </>
  )
}
