import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

const PostImage = styled(Img)`
  @media screen and (Max-width: 500px) {
    max-width: 350px;
    height: auto;
  }
`;

const Post = styled.p`
  text-align: center;
  padding: 1rem 12px;
`;

export default function NewsItemPage({ data: { news }}) {
  return (
    <>
      <h2 className="font-grenze text-white text-4xl mt-12 text-center">{news.name}</h2>
      <p className="font-grenze text-white text-center text-2xl">By: &nbsp; {news.postAuthor}</p>
      <div className="flex flex-wrap justify-center items-center">
        <div className="container mt-12 flex flex-col content-between items-center">
          <PostImage fluid={news.image.asset.fluid} />
          <Post className="font-grenze text-2xl text-white">{news.newsItem}</Post>
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
          fluid(maxWidth: 500) {
            ...GatsbySanityImageFluid
          }
        }
      }
      newsItem
    }
  }
`;