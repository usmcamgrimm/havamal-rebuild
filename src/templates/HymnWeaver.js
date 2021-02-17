import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

const SingleImage = styled.div`
  .gatsby-image-wrapper {
    max-width: 400px;
    height: auto;
    margin: 0 auto;
    margin-top: 1rem;
    box-shadow: 5px 3px 16px rgba(0, 0, 0, 0.8);
  }
`;

export default function HymnWeaverPage({ data: { hw } }) {
  return (
    <SingleImage className="flex flex-col justify-center">
      <h2 className="text-center text-white font-grenze text-2xl mt-12">{hw.name}</h2>
      <p className="text-center text-white font-grenze text-2xl">{hw.bio}</p>
      <Img fluid={hw.image.asset.fluid} />
    </SingleImage>
  )
}

export const query = graphql`
  query($slug: String!) {
    hw: sanityBand (slug: { current: { eq: $slug } }) {
      name
      id
      bio
      image {
        asset {
          fluid(maxWidth: 500, maxHeight: 750) {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
  }
`;