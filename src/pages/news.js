import React from 'react'
import { graphql } from 'gatsby';

import SEO from "../components/seo"
import Layout from '../components/Layout'
import NewsPosts from '../components/NewsPosts'

export default function NewsPage({ data }) {
  const news = data.news.nodes;
  return (
    <>
      <SEO title="News" />
      <Layout>
        <h1 className="text-6xl text-center pt-16 pb-6 font-pirata font-medium text-blue-lighter">
          News
        </h1>
        <div className="font-grenze text-center text-2xl text-white">
          <p>There are {news.length} posts by Havamal</p>
        </div>
        <NewsPosts news={news} />
      </Layout>
    </>
  )
}

export const query = graphql`
  query NewsQuery {
    news: allSanityNewsPost {
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