import React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import styled from 'styled-components'

import SEO from "../components/seo"

const ShowBand = styled.div`
  display: grid;
  place-items: center;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  padding: 0 7rem;
  @media screen and (min-width: 1026px) {
    padding: 0;
  }
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
  a {
    text-align: center;
  }
  .bio {
    padding: 6px;
    text-align: center;
  }
`;

export default function SagaPage({ data }) {
  const hymnweavers = data.hymnweavers.nodes 
  return (
    <>
      <SEO title="Saga" />
      <h1 className="text-5xl lg:text-6xl text-center my-16 font-pirata font-medium text-blue-lighter">
        The Hymn-Weavers
      </h1>
      <ShowBand className="container mx-auto">
        {hymnweavers.map(band => (
          <HW>
            <p className="font-grenze text-xl lg:text-2xl text-white text-center">
              {`${band.name}`}
            </p>
            <p className="font-grenze text-xl lg:text-2xl text-blue-lighter text-center">
              {`${band.instrument}`}
            </p>
            <GatsbyImage image={band.image.asset.gatsbyImageData} />
          </HW>
        ))}
      </ShowBand>
      <h1 className="text-5xl lg:text-6xl text-center my-16 font-pirata font-medium text-blue-lighter">
        The Havamal Saga
      </h1>
      <div className="container px-8 text-start">
        <p className="font-grenze text-2xl text-white">
          Kjell Gilliusson and Lennie Spetze are hailed as the founders of Havamal. They formed the band in Stockholm, Sweden in 2016 and soon invited Björn Larsson. Andreas Herlogsson would join later, after the departure of Rodrigo Valenzuela. Sandra Wallo took over for Pontus Knutsson, until her departure in 2020. Now hail Tino Vesanen on bass!
        </p>
        <p className="font-grenze text-2xl text-white">
          Havamal's crushing sound is derived from their wide and varying musical influences. Their mix of symphonic, brutal, melodic death metal is unique and makes themn stand out as masters of their craft. Their first release, an EP titled <strong>Call of The North</strong>, was released independently in 2017, and was an overwhelming success. Conducting raids throughout Sweden, Havamal was invited to play at Northern Blasphemy and the Wacken Metal Battle.
        </p>
        <p className="font-grenze text-2xl text-white">
          Signed by Art Gates Records in 2019, the first full-length album, <strong>Tales From Yggdrasil</strong>, was released. Once again proving their musical prowess, Havamal unleashed many raids throughout their home country and spread their music. Hopefully we will soon see Havamal set sail on their longships and spread the raids across the globe.
        </p>
        <p className="font-grenze text-2xl text-white">
        Havamal's second full-length album, "The Shadow Chapter", is out NOW!
        </p>
      </div>
      <div className="text-center">
        <h2 className="font-BlackChancery text-4xl py-4 text-blue-lighter">
          Hail Havamal!
        </h2>
      </div>
    </>
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