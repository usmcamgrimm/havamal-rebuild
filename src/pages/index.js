import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/Layout'
import SEO from '../components/seo'

export default function IndexPage() {
  const data = useStaticQuery(graphql`
    query {
      HavamalLogo: file(relativePath: { eq: "images/havamal_bg.png" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
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
          <div className="container">
            <Img fluid={data.HavamalLogo.childImageSharp.fluid} />
            <h1 className="text-6xl text-center font-pirata text-blue-lighter">Hail, Hordes of Havamal!</h1>
          </div>
      </Layout>
    </>
  )
}
