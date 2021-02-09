import React from 'react'
import SEO from '../components/seo'
import Logo from '../components/Logo'
import styled from 'styled-components'

const LogoSection = styled.div`
  // @media screen and (max-width:600px) {
  //   .gatsby-image-wrapper {
  //     width: 90%;
  //     height: auto;
  //   }
  // }
`;


export default function IndexPage() {
  return (
    <>
      <SEO title="Home" />
      <LogoSection className="flex flex-col items-center justify-center h-screen" >
        <Logo />
        <h1 className="text-6xl text-center font-pirata text-blue-lighter">Hail, Hordes of Havamal!</h1>
      </LogoSection>
    </>
  )
}
