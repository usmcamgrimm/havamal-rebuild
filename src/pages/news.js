import React from 'react'
import { graphql } from 'gatsby';

import SEO from "../components/seo"
import NewsPosts from '../components/NewsPosts'

export default function NewsPage({ data }) {
  const news = data.news.nodes;
  return (
    <>
      <SEO title="News" />
      <h1 className="text-6xl text-center pt-16 pb-6 font-pirata font-medium text-blue-lighter">
        News
      </h1>
      <div className="font-grenze text-center text-2xl text-white">
        <p>Stay up to date with Havamal! There are {news.length} posts listed on this page.</p>
      </div>
      <NewsPosts news={news} />
    </>
  )
}

export const query = graphql`
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
            gatsbyImageData(
              width: 400
            )
          }
        }
      }
    }
  }
`;