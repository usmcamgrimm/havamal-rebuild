import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import SEO from '../components/seo'
import BgImage from '../components/BgImage'
import styled from 'styled-components'

const TextShadow = styled.h1`
  text-shadow: 4px 4px 5px #000000;
`;

export default function IndexPage() {

  return (
    <>
      <SEO title="Home" />
      <BgImage>
        <div className="flex flex-col -mt-12 items-center justify-center h-screen">
          <StaticImage
            src="../resources/images/havamal_logo.png"
            layout="fullWidth"
            placeholder="blurred"
            alt="Havamal logo"
          />
          <TextShadow className="text-4xl lg:text-6xl text-center font-pirata text-blue-lighter">Hail, Hordes of Havamal!</TextShadow>
        </div>
      </BgImage>
    </>
  )
}