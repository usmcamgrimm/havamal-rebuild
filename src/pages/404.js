import React from 'react'
import Layout from '../components/layout'

import { css } from '@emotion/react'

export default function NotFoundPage() {
  return (
    <Layout>
      <h1 css={css`
        font-family: Norse;
        font-size: 3rem;
        font-weight: normal;
        color: #66add9;
        text-align: center;
        margin-top: 4rem;
        margin-bottom: 4rem;
      `}>There's nothing here!</h1>
    </Layout>
  )
}