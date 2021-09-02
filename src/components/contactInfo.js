import React from 'react'

import { css } from '@emotion/react'
import styled from '@emotion/styled'

const AGR = styled.div`
  padding: 1rem;
  p {
    font-family: grenze;
    font-size: 1.2rem;
    color: #ffffff;
  }
`;
const HFP = styled.div`
  padding: 8px 1rem;
  p {
    font-family: grenze;
    font-size: 1.2rem;
    color: #ffffff;
  }
`;
const Line = styled.hr`
  width: 80%;
  text-align: left;
  margin-bottom: 2rem;
  border-bottom: 1px solid rgba(102, 173, 217, 0.5);
`;

export default function ContactInfo() {
  return (
    <>
      <AGR>
        <a 
          href="https://artgatesrecords.com/" 
          target="_blank" 
          rel="noreferrer" 
          aria-label="Art Gates Records"
          css={css`
            cursor: crosshair;
            text-decoration: none;
          `}
        >
        <p>Art Gates Records</p>
        </a>
        <a 
          href="mailto:info@artgatesrecords.com"
          aria-label="Art Gates Records Email"
          css={css`
            text-decoration: none;
          `}
        >
          <p>info[at]artgatesrecords.com</p>
        </a>
      </AGR>

      <Line />

      <HFP>
        <a 
          href="https://www.facebook.com/HellFrogPromotion/" 
          target="_blank" 
          rel="noreferrer" 
          aria-label="Hell Frog Promotion"
          css={css`
            cursor: crosshair;
            text-decoration: none;
            `}
        >
        <p>Hell Frog Promotion</p>
        </a>
        <a 
          href="mailto:hellfrog.prom@hotmail.com"
          aria-label="Hell Frog Promotions Email"
          css={css`
            text-decoration: none;
          `}
        >
          <p>hellfrog.prom[at]hotmail.com</p>
        </a>
      </HFP>
    </>
  )
}