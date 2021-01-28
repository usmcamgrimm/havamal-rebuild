import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

export default function HymnWeaverPage({ data: { bandMembers } }) {
  return (
    <div className="container">
      <h2>{bandMembers.name}</h2>
      <Img fluid={bandMembers.image.asset.fluid} />
      <p>{bandMembers.description}</p>
    </div>
  )
}

export const query = graphql`
  query($slug: String!) {
    HymnWeaver: sanityBand (slug: { current: { eq: $slug } }) {
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