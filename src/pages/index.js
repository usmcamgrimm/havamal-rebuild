import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import SEO from '../components/seo'

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
          fluid(maxWidth: 550) {
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
      <SEO title="Home" />
      <div className="flex flex-col -mt-12 items-center justify-center h-screen">
        <Img fluid={logos} className="pt-4" alt="Havamal logo" />
        <h1 className="text-4xl lg:text-6xl text-center font-pirata text-blue-lighter">Hail, Hordes of Havamal!</h1>
      </div>
    </>
  )
}
