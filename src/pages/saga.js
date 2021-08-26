import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import { GatsbyImage } from 'gatsby-plugin-image'
import { css } from '@emotion/react'
import styled from '@emotion/styled'

const Band = styled.div`
  display: grid;
  place-items: center;
  grid-gap: 12px;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  padding: 0;
  width: 50%;
  margin: 0 auto;
  @media screen and (max-width: 500px) {
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 1rem 7rem;
  }
`;
const HW = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  .gatsby-image-wrapper {
    max-width: 250px;
    height: auto;
    box-shadow: 5px 3px 16px rgba(0, 0, 0, 0.8);
  }
  p {
    font-family: grenze;
    color: #ffffff;
    font-size: 1.4rem;
    text-align: center;
  }
`;

export default function Saga({ data }) {
  const hymnweavers = data.hymnweavers.nodes
  return (
    <Layout>
      <h1 css={css`
        font-family: grenze;
        font-size: 2rem;
        color: #004b87;
        text-align: center;
        margin-top: 4rem;
        margin-bottom: 4rem;
      `}>The Hymn Weavers</h1>
      <Band>
        {hymnweavers.map(band => (
          <HW>
            <p>{`${band.name}`}</p>
            <p>{`${band.instrument}`}</p>
            <GatsbyImage image={band.image.asset.gatsbyImageData} />
          </HW>
        ))}
      </Band>
    </Layout>
  )
}

export const query = graphql`
  query {
    hymnweavers: allSanityBand {
      nodes {
        name
        id
        instrument
        slug {
          current
        }
        image {
          asset {
            gatsbyImageData(
              width: 250
            )
          }
        }
      }
    }
  }
`;