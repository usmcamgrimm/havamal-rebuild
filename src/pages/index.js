import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import SEO from '../components/seo'
//import Logo from '../components/Logo'
import BgImage from '../components/BgImage'
import styled from 'styled-components'

const TextShadow = styled.h1`
  text-shadow: 4px 4px 5px #000000;
`;

const LogoImage = styled.div`
  @media screen and (max-width: 500px) {
    max-width: 350px;
    height: auto;
  }
`;

export default function IndexPage() {
  return (
    <>
      <SEO title="Home" />
      <BgImage>
        <div className="flex flex-col -mt-12 items-center justify-center h-screen">
          <LogoImage>
            <StaticImage
              src="../resources/images/havamal_logo.png"
              alt="Havamal logo"
              layout="fullWidth"
              placeholder="blurred"
            />
          </LogoImage>
          <TextShadow className="text-4xl lg:text-6xl text-center font-pirata text-blue-lighter">Hail, Hordes of Havamal!</TextShadow>
        </div>
      </BgImage>
    </>
  )
}
