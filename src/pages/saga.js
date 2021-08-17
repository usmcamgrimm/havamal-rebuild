import React from 'react'
import Layout from '../components/Layout'
import { StaticImage } from 'gatsby-plugin-image'
import { css } from '@emotion/react'
import styled from '@emotion/styled'

const Band = styled.div`
  display: grid;
  place-items: center;
  grid-gap: 1rem;;
  grid-template-columns: (auto-fit, minmax(150px, 1fr));
  padding: 0 7rem;
  margin: 0 auto;
  @media screen and (min-width: 1026px) {
    padding: 0rem;
  }
  @media screen and (max-width: 500px) {
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 1rem 7rem;
  }
`;

export default function Saga() {
  return (
    <Layout>
      <h1 css={css`
        font-family: grenze;
        font-size: 2rem;
        color: #004b87;
        text-align: center;
        margin-top: 4rem;
        margin-bottom: 4rem;
      `}>The Hymn Weavers</h1>
      <Band>
        <StaticImage
          src="../resources/band-photos/andreas.jpg"
          alt="Andreas Herlogsson"
          placeholder="blurred"
          layout="constrained"
          css={css`
            max-width: 150px;
            border-radius: 5px;
          `}
        />
        <StaticImage
          src="../resources/band-photos/bjorn.jpg"
          alt="Andreas Herlogsson"
          placeholder="blurred"
          layout="constrained"
          css={css`
            max-width: 150px;
            border-radius: 5px;
          `}
        />
        <StaticImage
          src="../resources/band-photos/Kjell.jpg"
          alt="Andreas Herlogsson"
          placeholder="blurred"
          layout="constrained"
          css={css`
            max-width: 150px;
            border-radius: 5px;
          `}
        />
        <StaticImage
          src="../resources/band-photos/lennie.jpg"
          alt="Andreas Herlogsson"
          placeholder="blurred"
          layout="constrained"
          css={css`
            max-width: 150px;
            border-radius: 5px;
          `}
        />
        <StaticImage
          src="../resources/band-photos/tino.jpg"
          alt="Andreas Herlogsson"
          placeholder="blurred"
          layout="constrained"
          css={css`
            max-width:150px;
            border-radius: 5px;
          `}
        />
      </Band>
    </Layout>
  )
}