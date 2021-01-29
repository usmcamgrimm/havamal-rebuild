import React from 'react'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
// import styled from 'styled-components'

import SEO from "../components/seo"

export default function SagaPage({ data }) {
  const hymnweavers = data.hymnweavers.nodes 
  return (
    <>
      <SEO title="Saga" />
      <h1 className="text-5xl lg:text-6xl text-center my-16 font-pirata font-medium text-blue-lighter">
        The Hymn-Weavers
      </h1>
      <div>
        {hymnweavers.map(band => (
          <div>
            <Link to={`/hymnweavers/${band.slug.current}`}>
              <p className="font-grenze text-lg lg:text-xl text-white">
                {`${band.name} - ${band.instrument}`}
              </p>
            </Link>
            <Img fluid={band.image.asset.fluid} />
            <p className="container">{band.description}</p>
          </div>
        ))}
      </div>
      <h1 className="text-5xl lg:text-6xl text-center my-16 font-pirata font-medium text-blue-lighter">
        The Havamal Saga
      </h1>
      <div className="container px-8 text-start">
        <p className="font-grenze text-xl text-white">
          Kjell Gilliusson and Lennie Spetze are hailed as the founders of Havamal. They formed the band in Stockholm, Sweden in 2016 and soon invited Björn Larsson. Andreas Herlogsson would join later, after the departure of Rodrigo Valenzuela. Sandra Wallo took over for Pontus Knutsson, until her departure in 2020.
        </p>
        <p className="font-grenze text-xl text-white">
          Havamal's crushing sound is derived from their wide and varying musical influences. Their mix of symphonic, brutal, melodic death metal is unique and makes themn stand out as masters of their craft. Their first release, an EP titled <strong>Call of The North</strong>, was released independently in 2017, and was an overwhelming success. Conducting raids throughout Sweden, Havamal was invited to play at Northern Blasphemy and the Wacken Metal Battle.
        </p>
        <p className="font-grenze text-xl text-white">
          Signed by Art Gates Records in 2019, the first full-length album, <strong>Tales From Yggdrasil</strong>, was released. Once again proving their musical prowess, Havamal unleashed many raids throughout their home country and spread their music. Hopefully we will soon see Havamal set sail on their longships and spread the raids across the globe.
        </p>
        <p className="font-grenze text-xl text-white">
          Allied once more with Art Gates Records, the hymn-weavers are returning to the studio to record their second full-length album. Look for this epic new album to be released in 2021!
        </p>
      </div>
      <div className="text-center">
        <h2 className="font-grenze text-4xl py-4 text-blue-lighter">
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
        bio
        instrument
        slug {
          current
        }
        image {
          asset {
            fluid(maxWidth: 250) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`;