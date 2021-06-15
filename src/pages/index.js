import React from 'react'
import { graphql } from 'gatsby'
// import { StaticImage } from 'gatsby-plugin-image'
import { GatsbyImage, getImage, withArtDirection } from 'gatsby-plugin-image'
import SEO from '../components/seo'
import BgImage from '../components/BgImage'
import styled from 'styled-components'

const TextShadow = styled.h1`
  text-shadow: 4px 4px 5px #000000;
`;

export default function IndexPage({ data }) {
  const HavamalLogo = withArtDirection(getImage(data.DefaultLogo), [
    {
      media: "(max-width: 1023px)",
      image: getImage(data.TabletLogo),
    },
    {
      media: "(max-width: 767px)",
      image: getImage(data.MobileLogo),
    },
  ])
  return (
    <>
      <SEO title="Home" />
      <BgImage>
        <div className="flex flex-col -mt-12 items-center justify-center h-screen">
          {/* <StaticImage
            src="../resources/images/havamal_logo.png"
            layout="fullWidth"
            placeholder="blurred"
            alt="Havamal logo"
          /> */}
          <GatsbyImage image={HavamalLogo} alt="Havamal logo" />
          <TextShadow className="text-4xl lg:text-6xl text-center font-pirata text-blue-lighter">Hail, Hordes of Havamal!</TextShadow>
        </div>
      </BgImage>
    </>
  )
}

export const LogoQuery = graphql`
  query {
    DefaultLogo: file(relativePath: { eq: "images/havamal_logo.png" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
      }
    } 
    MobileLogo: file(relativePath: { eq: "images/havamal_logo_mobile.png" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
      }
    }
    TabletLogo: file(relativePath: { eq: "images/havamal_logo_tablet.png" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
      }
    }
  }
`;