import React from 'react'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

import { css } from '@emotion/react'
import styled from '@emotion/styled'

const Post = styled.p`
  font-family: grenze;
  font-size: 1.3rem;
  text-align: center;
  padding: 1rem 12px;
  font-family: grenze;
  color: #ffffff;
`;
const PostWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function NewsItemPage({ data: { news }}) {
  return (
    <Layout>
      <h1 css={css`
        font-family: Norse;
        font-size: 3rem;
        font-weight: normal;
        color: #66add9;
        text-align: center;
        margin-top: 4rem;
      `}>{news.name}</h1>
      <Post>{`By: ${news.postAuthor}`}</Post>
      <PostWrapper>
          <GatsbyImage 
            image={news.image.asset.gatsbyImageData}
            alt="Havamal news post"
            css={css`
              margin: 0 auto;
              @media screen and (max-width: 500px) {
                max-width: 350px;
                height: auto;
              }
            `}
          />
          <Post>{news.newsItem}</Post>
      </PostWrapper>
    </Layout>
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