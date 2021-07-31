import * as React from "react"
import { StaticImage } from 'gatsby-plugin-image'
import Layout from "../components/Layout"
import LinkLayout from '../components/LinkLayout'
import Raids from '../components/Raids'

import { css } from '@emotion/react'
import styled from '@emotion/styled'

export default function Index() {
  return (
    <Layout>
      <Container>
        <StaticImage
          src="../resources/band-photos/bandPhoto.jpg"
          alt="photo of the band"
          placeholder="blurred"
          layout="constrained"
          css={css`
            max-width: 80%;
            margin-top: 2rem;
            border-radius: 5px;
            box-shadow: 2px 4px 12px #000000, -2px -4px 12px #000000;
          `}
        />
        <StaticImage
          src="../resources/images/havamal_logo.png"
          alt="Havamal logo"
          placeholder="blurred"
          layout="constrained"
          css={css`
            margin-top: -400px;
            max-width: 900px;
            height: auto;
            z-index: 99;
          `}
        />
        <Welcome>
          Hail, Hordes of Havamal!
        </Welcome>
      </Container>
      <>
        <hr css={css`
          width: 55%;
          margin: 0 auto;
          border: 1px solid #434353; 
          margin-bottom: 3rem; 
        `} />
        <LinkLayout />
      </>
      <Raids />
    </Layout> 
  )
}

const Welcome = styled.h1`
  font-family: "pirata one";
  font-size: clamp(1.5rem, 4rem, 5rem);
  font-weight: normal;
  text-align: center;
  color: #004b87;
  padding: 2rem;
`
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`