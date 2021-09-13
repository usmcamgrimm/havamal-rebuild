import React from 'react'
import { Link } from 'gatsby'

import { css } from '@emotion/react'
import styled from '@emotion/styled'

const MerchWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function Merch() {
  return (
    <MerchWrapper>
      <h1 css={css`
        font-family: Norse;
        font-size: 3rem;
        font-weight: normal;
        color: #66add9;
        text-align: center;
        margin-top: 4rem;
        margin-bottom: 4rem;
      `}>Havamal Merch</h1>
    </MerchWrapper>
  )
}