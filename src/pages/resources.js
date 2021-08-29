import React from 'react'
import Layout from '../components/Layout'
import Nidhoggr from '../components/Nidhoggr'

import { css } from '@emotion/react'
import styled from '@emotion/styled'

const BackgroundWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function resources() {
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
      `}>Contact Information</h1>
      <BackgroundWrapper>
        <Nidhoggr
          css={css`
            z-index: -1;
          `}
        />
      </BackgroundWrapper>
    </Layout>
  )
}