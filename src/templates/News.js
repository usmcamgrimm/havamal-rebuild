import React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

import styled from '@emotion/styled'

export default function NewsItemPage({ data: { news }}) {
  return (
    <>
      <h2>{news.name}</h2>
      <p>`By: ${news.postAuthor}`</p>
      <div>
        <div>
          <GatsbyImage fluid={news.image.asset.fluid} />
          <p>{news.newsItem}</p>
        </div>
      </div>
    </>
  )
}

export const query = graphql`
  query($slug: String!) {
    news: sanityNewsPost(slug: { current: { eq: $slug } }) {
      name
      id
      postAuthor
      image {
        asset {
          gatsbyImageData(
            width: 500
          )
        }
      }
      newsItem
    }
  }
`;