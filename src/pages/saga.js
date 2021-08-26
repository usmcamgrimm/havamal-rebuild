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

      <section id="band-images">
        <Band>
          {hymnweavers.map(band => (
            <HW>
              <p>{`${band.name}`}</p>
              <p>{`${band.instrument}`}</p>
              <GatsbyImage image={band.image.asset.gatsbyImageData} />
            </HW>
          ))}
        </Band>
      </section>

      <section id="havamal-saga">
        <SagaText>
          <p>
            Kjell Gilliusson and Lennie Spetze are hailed as the founders of Havamal. They formed the band in Stockholm, Sweden in 2016 and soon invited Björn Larsson. Andreas Herlogsson would join later, after the departure of Rodrigo Valenzuela. Sandra Wallo took over for Pontus Knutsson, until her departure in 2020. Now hail Tino Vesanen on bass!
          </p>
          <p>
            Havamal's crushing sound is derived from their wide and varying musical influences. Their mix of symphonic, brutal, melodic death metal is unique and makes themn stand out as masters of their craft. Their first release, an EP titled <strong>Call of The North</strong>, was released independently in 2017, and was an overwhelming success. Conducting raids throughout Sweden, Havamal was invited to play at Northern Blasphemy and the Wacken Metal Battle.
          </p>
          <p>
            Signed by Art Gates Records in 2019, the first full-length album, <strong>Tales From Yggdrasil</strong>, was released. Once again proving their musical prowess, Havamal unleashed many raids throughout their home country and spread their music. Hopefully we will soon see Havamal set sail on their longships and spread the raids across the globe.
          </p>
          <p>
            Havamal's second full-length album, "The Shadow Chapter", is out NOW!
          </p>
        </SagaText>
      </section>
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