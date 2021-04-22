import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage } from "gatsby-plugin-image";
import styled from 'styled-components';

const NewsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const NewsItem = styled.div`
  display: grid;
  padding: 2rem;
  text-align: center;
  .gatsby-image-wrapper {
    width: auto;
    max-height: 200px;
    object-fit: contain;
    display: grid;
    align-tems: center;
  }
`;

function SinglePost({ news }) {
  return (
    <NewsItem>
      <Link to={`/post/${news.slug.current}`}>
        <h2 className="text-2xl font-grenze text-blue-lighter hover:underline m-0">
          {news.name}
        </h2>
        <h2 className="text-2xl font-grenze text-blue-lighter m-0">
          {news.postAuthor}
        </h2>
        <GatsbyImage
          image={news.image.childImageSharp.gatsbyImageData}
          alt={news.name}
          className="max-w-xs" />
      </Link>
    </NewsItem>
  );
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