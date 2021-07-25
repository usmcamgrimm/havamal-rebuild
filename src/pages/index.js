import * as React from "react"
import { StaticImage } from 'gatsby-plugin-image'
import Layout from "../components/Layout"

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
            margin-top: 3rem;
            border-radius: 5px;
            box-shadow: 2px 4px 12px #000000, -2px -4px 12px #000000;
          `}
        />
        <Welcome>
          Hail, Hordes of Havamal!
        </Welcome>
      </Container>
    </Layout> 
  )
}

const Welcome = styled.h1`
  font-family: "pirata one";
  font-size: 2.25rem;
  font-weight: normal;
  text-align: center;
  color: #66add9;
  @media screen and (min-width: 1025px) {
    text-size: 3rem;
  }
`
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`