import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import NewsPosts from '../components/NewsPosts'

import { css } from '@emotion/react'
// import styled from '@emotion/styled'

export default function news({ data }) {
  const news = data.news.nodes;
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

      <NewsPosts news={news} />
    </Layout>
  )
}

export const query = graphql;`
  query NewsQuery {
    news: allSanityNewsPost(sort: {fields: postDate, order: DESC}) {
      nodes {
        name
        id
        slug {
          current
        }
        postDate
        postAuthor
        newsItem
        image {
          asset {
            fluid(maxWidth: 400) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`;