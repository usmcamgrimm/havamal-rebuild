import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

export default function NewsItemPage({ data: { news }}) {
  return (
    <div>
      <h2 className="font-grenze text-white text-4xl mt-12 text-center">{news.name}</h2>
      <newsImage>
        <Img className="container" fluid={news.image.asset.fluid} />
      </newsImage>
    </div>
  )
}

export const query = graphql`
  query($slug: String!) {
    news: sanityNewsPost(slug: { current: { eq: $slug } }) {
      name
      id
      image {
        asset {
          fluid(maxWidth: 600) {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
  }
`;