import React from 'react'
import { graphql } from 'gatsby';

import SEO from "../components/seo"
import Layout from '../components/Layout'

export default function NewsPage({ data }) {
  const news = data.news.nodes;
  return (
    <>
      <SEO title="News" />
      <Layout>
        <h1 className="text-6xl text-center my-16 font-pirata font-medium text-blue-lighter">
          News
        </h1>
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