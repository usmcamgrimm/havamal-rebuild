import React from 'react'

import { css } from '@emotion/react'
import styled from '@emotion/styled'

const RaidWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const DateTitle = styled.p`
  grid-area: date;
`
const EventTitle = styled.p`
  grid-area: event;
`
const LocationTitle = styled.p`
  grid-area: location;
`
const RaidContainer = styled.div`
  margin: 0 auto;
  display: grid;
  place-items: center;
  grid-template-columns: 200px 300px 300px;
  grid-template-rows: auto;
  grid-template-areas:
    "date event location";
  grid-gap: 12px;
  font-family: grenze;
  font-size: 1.4rem;
  color: #ffffff;
`
const Line = styled.hr`
  width: 50%;
  margin: 0 auto;
  margin-top: 1rem;
  margin-bottom: 2rem;
  border-bottom: 1px solid rgba(147, 147, 147, 0.4);
`;

export default function Raids() {
  return(
    <>
      <h1 css={css`
        font-family: grenze;
        font-size: 3rem;
        font-weight: normal;
        color: #66add9;
        text-align: center;
        margin-bottom: 4rem;
      `}>Upcoming Raids</h1>
      <RaidWrapper>
        <RaidContainer
          as="a"
          href="https://www.facebook.com/2228032767282124/posts/3635924743159579/?sfnsn=mo"
          target="_blank" 
          rel="noreferrer"
          css={css`
            text-decoration: none;
            &:hover {
              color: #004b87;
              transform: scale(1.01);
            }
          `}
        >
          <DateTitle>10 Sept 2021</DateTitle>
          <EventTitle className="event">Raise Your Horns</EventTitle>
          <LocationTitle className="location">Musikhuzet, Rønne, Denmark</LocationTitle>
        </RaidContainer>
        <Line />
        <RaidContainer
          as="a"
          href="https://www.facebook.com/2228032767282124/posts/3635924743159579/?sfnsn=mo"
          target="_blank" 
          rel="noreferrer"
          css={css`
            text-decoration: none;
            &:hover {
              color: #004b87;
              transform: scale(1.05);
            }
          `}
        >
          <DateTitle>28 May 2022</DateTitle>
          <EventTitle className="event">Järfälla Metal Fest</EventTitle>
          <LocationTitle className="location">Fredagsmangel, Järfälla, Sweden</LocationTitle>
        </RaidContainer>
      </RaidWrapper>
    </>
  )
}