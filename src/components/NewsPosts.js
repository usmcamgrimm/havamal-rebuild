import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

import { css } from '@emotion/react'
import styled from '@emotion/styled'

const NewsItem = styled.div`
  display: grid;
  padding: 2rem;
  text-align: center;
  .gatsby-image-wrapper {
    width: auto;
    max-height: 200px;
    object-fit: contain;
    display: grid;
    align-items: center;
  }
`;
const NewsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 2rem;
`;
const NewsWrapper = styled.div`
  max-width: 100%;
  padding: 1rem 12px;
`;

function SinglePost({ news }) {
  return <NewsItem>
    <Link to={`/post/${news.slug.current}`}>
      <h2
        css={css`
          font-size: 1.5rem;
          font-family: grenze;
          color: #66add9;
          margin: 0;
          &:hover {
            text-decoration: underline;
          }
        `}>{news.name}</h2> 
      <h2
        css={css`
          font-size: 1.5rem;
          font-family: grenze;
          color: #66add9;
          margin: 0;
        `}>{news.postAuthor}</h2>
      <GatsbyImage
        image={news.image.asset.gatsbyImageData} 
        alt={news.name} 
        css={css`max-width: 20rem;`} />
    </Link>
  </NewsItem>
}

export default function NewsPosts({ news }) {
  return (
    <NewsWrapper>
      <NewsGrid>
        {news.map((news) => (
          <SinglePost key={news.id} news={news} />
        ))}
      </NewsGrid>
    </NewsWrapper>
  )
}