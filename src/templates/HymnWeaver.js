import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

export default function HymnWeaverPage({ data: { hw } }) {
  return (
    <div className="container">
      <h2>{hw.name}</h2>
      <Img fluid={hw.image.asset.fluid} />
      <p>{hw.description}</p>
    </div>
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
          fluid(maxWidth: 500, maxHeight: 500) {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
  }
`;