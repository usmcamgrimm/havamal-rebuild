import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

export default function AxeIcon() {
  const data = useStaticQuery(graphql`
    query {
      AxeIcon: file(relativePath: { eq: "images/axes.png" }) {
        childImageSharp {
          gatsbyImageData(
            width: 50
            quality: 90
          )
        }
      }
    }
  `)

  return (
    <GatsbyImage image={data.AxeIcon.childImageSharp.gatsbyImageData} alt="menu button" />
  )
}