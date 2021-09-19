import React from 'react'
import { graphql } from 'gatsby'
import {GatsbyImage } from 'gatsby-plugin-image'
import Layout from '../components/layout'
import NewsPosts from '../components/NewsPosts'

import { css } from '@emotion/react'
import styled from '@emotion/styled'

const PostIntro = styled.p`
  font-family: grenze;
  font-size: 1.1rem;
  color: #ffffff;
  text-align: center;
`;

export default function NewsPage({ data }) {
  const news = data.news.nodes.newsItem;
  return (
    <Layout>
      <h1 css={css`
        font-family: Norse;
        font-size: 3rem;
        font-weight: normal;
        color: #66add9;
        text-align: center;
        margin-top: 4rem;
        margin-bottom: 4rem;
      `}>Updates From Havamal</h1>

      <PostIntro>
        Stay up to date with Havamal!
      </PostIntro>
      <PostIntro>
        There are 0 posts listed on this page.
      </PostIntro>
      <NewsPosts news={news} />
    </Layout>
  )
}