import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

export default function AxeIcon() {
  const data = useStaticQuery(graphql`
    query {
      AxeIcon: file(relativePath: { eq: "images/axes.png" }) {
        childImageSharp {
          fluid(maxWidth: 50) {
            ...GatsbyImageSharpFluid_noBase64
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
    }
  `)

  return (
    <Img fluid={data.AxeIcon.childImageSharp.fluid} alt="menu button" />
  )
}