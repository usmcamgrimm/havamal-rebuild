import React from 'react'
import Layout from '../components/Layout'
import { StaticImage } from 'gatsby-plugin-image'
import { css } from '@emotion/react'
import styled from '@emotion/styled'

const Band = styled.div`
  display: flex;
  flex-wrap: row nowrap;
  justify-content: space-evenly;
`;

export default function Saga() {
  return (
    <Layout>
      <Band>
      <StaticImage
        src="../resources/band-photos/andreas.jpg"
        alt="Andreas Herlogsson"
        placeholder="blurred"
        layout="constrained"
        css={css`
          max-width: 100px;
          border-radius: 5px;
        `}
      />
      <StaticImage
        src="../resources/band-photos/bjorn.jpg"
        alt="Andreas Herlogsson"
        placeholder="blurred"
        layout="constrained"
        css={css`
          max-width: 100px;
          border-radius: 5px;
        `}
      />
      <StaticImage
        src="../resources/band-photos/Kjell.jpg"
        alt="Andreas Herlogsson"
        placeholder="blurred"
        layout="constrained"
        css={css`
          max-width: 100px;
          border-radius: 5px;
        `}
      />
      <StaticImage
        src="../resources/band-photos/lennie.jpg"
        alt="Andreas Herlogsson"
        placeholder="blurred"
        layout="constrained"
        css={css`
          max-width: 100px;
          border-radius: 5px;
        `}
      />
      <StaticImage
        src="../resources/band-photos/tino.jpg"
        alt="Andreas Herlogsson"
        placeholder="blurred"
        layout="constrained"
        css={css`
          max-width: 100px;
          border-radius: 5px;
        `}
      />
      </Band>
    </Layout>
  )
}