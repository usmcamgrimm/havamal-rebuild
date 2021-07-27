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
            margin-top: -300px;
            max-width: 600px;
            height: auto;
            z-index: 99;
          `}
        />
        <Welcome>
          Hail, Hordes of Havamal!
        </Welcome>
      </Container>
      <h1 css={css`
        font-family: grenze;
        font-size: 2rem;
        color: #66add9;
        text-align: center;
      `}>Upcoming Raids</h1>
      <RaidContainer>
        <RaidDescription>
          <p>Järfälla Metal Fest - 28 May 2022</p>
          <p>Fredagsmangel, Järfälla, Sweden</p>
        </RaidDescription>
        <RaidInformation>
        <a href="https://www.facebook.com/2228032767282124/posts/3635924743159579/?sfnsn=mo" target="_blank" rel="noreferrer">
          <p 
            css={css`
              font-family: grenze;
              color: #ffffff;
            `}
            className="flyer"
          >INFO</p>
        </a>
        <a href="https://www.google.com/maps/place/Drabantv%C3%A4gen+11,+177+50+J%C3%A4rf%C3%A4lla,+Sweden/@59.4246958,17.8351142,17.75z/data=!4m5!3m4!1s0x465fa1d8b6ffe2eb:0x853a0a00e50acb6!8m2!3d59.4240721!4d17.8380435" target="_blank" rel="noreferrer">
          <p
            css={css`
              font-family: grenze;
              color: #ffffff
            `}
            className="map"
          >MAP</p>
        </a>
        </RaidInformation>
      </RaidContainer>
    </Layout> 
  )
}

const Welcome = styled.h1`
  font-family: "pirata one";
  font-size: 3rem;
  font-weight: normal;
  text-align: center;
  color: #66add9;
  padding: 2rem;
  @media screen and (min-width: 1025px) {
    text-size: 3rem;
  }
`
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const RaidContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const RaidDescription = styled.div`
  display: flex;
  flex-flow: row wrap;
  place-content: center;
  width: 450px;
  font-size: 1.25rem;
  color: #ffffff;
`
const RaidInformation = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  font-size: 1rem;
  color: #ffffff;
`