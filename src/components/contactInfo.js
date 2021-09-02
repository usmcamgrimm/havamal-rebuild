import React from 'react'

import { css } from '@emotion/react'
import styled from '@emotion/styled'

const AGR = styled.div`
  padding: 1rem;
  p {
    color: #ffffff;
  }
`;
const HFP = styled.div`
  padding: 8px 1rem;
`;

export default function ContactInfo() {
  return (
    <>
      <AGR>
        <p css={css`color: #ffffff`}>Art Gates Records</p>
        <p>Art Gates Records Email Link</p>
      </AGR>

      <HFP>
        <p css={css`color: #ffffff`}>Hell Frog Promotions</p>
        <p>Hell Frog Promotions Email Link</p>
      </HFP>
    </>
  )
}