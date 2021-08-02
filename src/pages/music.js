import React from 'react'
import Layout from '../components/Layout'
import { StaticIMage } from 'gatsby-plugin-image'
import { css } from '@emotion/react'
import styled from '@emotion/styled'

export default function MusicPage() {
  return (
    <Layout>
      <h1 css={css`
        font-family: grenze;
        font-size: 2rem;
        color: #004b87;
        text-align: center;
        margin-bottom: 4rem;
      `}>The Hymns of Havamal</h1>
    </Layout>
  )
}