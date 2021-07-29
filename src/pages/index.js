import * as React from "react"
import { StaticImage } from 'gatsby-plugin-image'
import Layout from "../components/Layout"
import LinkLayout from '../components/LinkLayout'

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
      <h1 css={css`
        font-family: grenze;
        font-size: 2rem;
        color: #004b87;
        text-align: center;
        margin-bottom: 4rem;
      `}>Upcoming Raids</h1>
      <RaidContainer>
        <DateTitle>28 May 2022</DateTitle>
        <EventTitle className="event">Järfälla Metal Fest</EventTitle>
        <LocationTitle className="location" css={css`grid-area: location`}>Fredagsmangel, Järfälla, Sweden</LocationTitle>
        <InfoTitle>
          <a href="https://www.facebook.com/2228032767282124/posts/3635924743159579/?sfnsn=mo" target="_blank" rel="noreferrer">
            <p 
              css={css`
                font-family: grenze;
                color: #ffffff;
              `}
            >INFO</p>
          </a>
        </InfoTitle>
      </RaidContainer>
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
const DateTitle = styled.p`
  grid-area: date;
`
const EventTitle = styled.p`
  grid-area: event;
`
const LocationTitle = styled.p`
  grid-area: location;
`
const InfoTitle = styled.div`
  grid-area: info;
`
const RaidContainer = styled.div`
  margin: 0 auto;
  display: grid;
  place-items: center;
  grid-template-columns: 200px 300px 300px . 100px;
  grid-template-rows: auto;
  grid-template-areas:
    "date event location info";
  grid-gap: 12px;
  font-family: grenze;
  font-size: 1.4rem;
  color: #ffffff;
  width: 50%;
  border-bottom: 1px solid rgba(147, 147, 147, 0.4);
`
// const RaidDescription = styled.div`
//   display: flex;
//   flex-flow: row wrap;
//   place-content: center;
//   width: 450px;
//   font-size: 1.25rem;
//   color: #ffffff;
// `
// const RaidInformation = styled.div`
//   display: flex;
//   flex-flow: row nowrap;
//   justify-content: space-between;
//   font-size: 1rem;
//   color: #ffffff;
// `