import React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage, withArtDirection } from 'gatsby-plugin-image'

export default function Logo() {

  const images = withArtDirection(getImage(logoQuery.defaultLogo), [
    {
      media: "(max-width: 500px)",
      image: getImage(logoQuery.mobileLogo),
    }
  ])

  return(
    <GatsbyImage
      image={images}
    />
  )
}

export const logoQuery = graphql`
  query {
    mobileLogo: file(relativePath: { eq: "images/havamal_logo_small.png" }) {
      childImageSharp {
        gatsbyImageData(
          placeholder: BLURRED
        )
      }
    }
    defaultLogo: file(relativePath: { eq: "images/havamal_logo.png" }) {
      childImageSharp {
        gatsbyImageData(
          placeholder: BLURRED
        )
      }
    }
  }
`