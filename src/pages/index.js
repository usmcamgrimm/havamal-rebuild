import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage } from "gatsby-plugin-image";
import SEO from '../components/SEO'
import BgImage from '../components/BgImage'
import styled from 'styled-components'

const TextShadow = styled.h1`
  text-shadow: 4px 4px 5px #000000;
`;

export default function IndexPage() {
  const data = useStaticQuery(graphql`{
  mobileLogo: file(relativePath: {eq: "images/havamal_logo.png"}) {
    childImageSharp {
      gatsbyImageData(width: 400, placeholder: NONE, layout: CONSTRAINED)
    }
  }
  tabletLogo: file(relativePath: {eq: "images/havamal_logo.png"}) {
    childImageSharp {
      gatsbyImageData(width: 550, placeholder: NONE, layout: CONSTRAINED)
    }
  }
  desktopLogo: file(relativePath: {eq: "images/havamal_logo.png"}) {
    childImageSharp {
      gatsbyImageData(width: 1000, placeholder: NONE, layout: CONSTRAINED)
    }
  }
}
`)

  const logos = [
    data.mobileLogo.childImageSharp.gatsbyImageData,
    {
      ...data.tabletLogo.childImageSharp.gatsbyImageData,
      media: `(min-width: 601px)`,
    },
    {
      ...data.desktopLogo.childImageSharp.gatsbyImageData,
      media: `(min-width: 769px)`,
    },
  ]

  return <>
    <SEO title="Home" />
    <BgImage>
      <div className="flex flex-col -mt-12 items-center justify-center h-screen">
        <GatsbyImage image={logos} className="pt-4" alt="Havamal logo" />
        <TextShadow className="text-4xl lg:text-6xl text-center font-pirata text-blue-lighter">Hail, Hordes of Havamal!</TextShadow>
      </div>
    </BgImage>
  </>;
}
