import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components';

const NewsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  grid-auto-rows: auto auto 200px;
`;
const NewsItem = styled.div`
  display: grid;
  @supports not (grid-template-rows: subgrid) {
    --rows: auto auto 1fr;
  }
  grid-template-rows: var(--rows, subgrid);
  grid-row: span 3;
  gap: 1.5rem;
`;

function SinglePost({ news }) {
  return <NewsItem>
    <Link to={`/post/$(news.slug.current)`}>
      <h2 className="text-2xl font-grenze text-blue-lighter hover:underline m-0">
        {news.name}
      </h2>
      <h2 className="text-2xl font-grenze text-blue-lighter m-0">
        {news.postAuthor}
      </h2>
      <Img fluid={news.image.asset.fluid} alt={news.name} className="max-w-xs" />
    </Link>
  </NewsItem>
}

export default function NewsPosts({ news }) {
  return (
    <div className="container max-w-full px-16 pt-12">
      <NewsGrid>
        {news.map((news) => (
          <SinglePost key={news.id} news={news} />
        ))}
      </NewsGrid>
    </div>
  )
}