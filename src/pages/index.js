import React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage, withArtDirection } from 'gatsby-plugin-image'
import SEO from '../components/seo'
import BgImage from '../components/BgImage'
import styled from 'styled-components'

const TextShadow = styled.h1`
  text-shadow: 4px 4px 5px #000000;
`;

export default function IndexPage({ data }) {
  const images = withArtDirection(getImage(data.defaultLogo), [
    {
      media: "(max-width: 500px)",
      image: getImage(data.mobileLogo),
    }
  ])

  return (
    <>
      <SEO title="Home" />
      <BgImage>
        <div className="flex flex-col -mt-12 items-center justify-center h-screen">
          <GatsbyImage
            image={images}
            alt={`Havamal logo`}
          />
          <TextShadow className="text-4xl lg:text-6xl text-center font-pirata text-blue-lighter">Hail, Hordes of Havamal!</TextShadow>
        </div>
      </BgImage>
    </>
  )
}

export const query = graphql`
  {
    mobileLogo: file(relativePath: { eq: "images/havamal_logo_small.png" }) {
      childImageSharp {
        gatsbyImageData(
          width: 350,
          placeholder: BLURRED
        )
      }
    }
    defaultLogo: file(relativePath: { eq: "images/havamal_logo.png" }) {
      childImageSharp {
        gatsbyImageData(
          width: 800,
          placeholder: BLURRED
        )
      }
    }
  }
`