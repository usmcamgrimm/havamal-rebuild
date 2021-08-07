import * as React from "react"
import { StaticImage } from 'gatsby-plugin-image'
import Layout from "../components/Layout"
import LinkLayout from '../components/LinkLayout'
import Raids from '../components/Raids'
import HavamalVideo from '../components/SingleVideo'

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
            border-radius: 12px;
            box-shadow: 12px 12px 18px #000000, -12px -12px 18px #000000;
          `}
        />
        <StaticImage
          src="../resources/images/havamal_logo.png"
          alt="Havamal logo"
          placeholder="blurred"
          layout="constrained"
          css={css`
            margin-top: -400px;
            max-width: 1100px;
            height: auto;
            z-index: 10;
            @media screen and (max-width: 1025px) {
              margin-top: -300px;
            }
            @media screen and (max-width: 768px) {
              margin-top: -250px;
            }
            @media screen and (max-width: 500px) {
              margin-top: -100px;
            }
          `}
        />
        <Welcome>
          Hail, Hordes of Havamal!
        </Welcome>
      </Container>
      <VideoContainer>
        <HavamalVideo
          videoURL="https://www.youtube.com/embed/w6Gy4ZGG5eg"
          videoTitle="Nidhöggr"
        />
      </VideoContainer>
      
      <section id="raids">
        <Raids />
      </section>
      <h1 css={css`
        font-family: grenze;
        font-size: 2rem;
        color: #004b87;
        text-align: center;
        margin-top: 2rem;
        margin-bottom: 2rem;
      `}>Follow Havamal:</h1>
      <LinkLayout />
    </Layout> 
  )
}

const Welcome = styled.h1`
  font-family: norse;
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
const VideoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;