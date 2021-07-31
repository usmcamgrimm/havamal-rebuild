import React from 'react'

import { css } from '@emotion/react'
import styled from '@emotion/styled'

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
  font-family: grenze;
  color: #ffffff;
  text-decoration: none;
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

export default function Raids() {
  return(
    <>
      <h1 css={css`
        font-family: norse;
        font-size: 2rem;
        color: #004b87;
        text-align: center;
        margin-bottom: 4rem;
      `}>Upcoming Raids</h1>
      <RaidContainer>
        <DateTitle>28 May 2022</DateTitle>
        <EventTitle className="event">Järfälla Metal Fest</EventTitle>
        <LocationTitle className="location" css={css`grid-area: location`}>Fredagsmangel, Järfälla, Sweden</LocationTitle>
        <InfoTitle
          as="a"
          href="https://www.facebook.com/2228032767282124/posts/3635924743159579/?sfnsn=mo"
          target="_blank" 
          rel="noreferrer"
        >
          INFO
        </InfoTitle>
      </RaidContainer>
    </>
  )
}