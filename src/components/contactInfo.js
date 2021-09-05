import React from 'react'

import { css } from '@emotion/react'
import styled from '@emotion/styled'

const Contact = styled.div`
  padding: 8px 1rem;
  p {
    font-family: grenze;
    font-size: 1.6rem;
;    color: #ffffff;
    margin-bottom: 6px;
  }
`;

export default function ContactInfo() {
  return (
    <>
      <Contact>
        <a 
          href="https://www.facebook.com/Havamalofficial" 
          target="_blank" 
          rel="noreferrer" 
          aria-label="Official Facebook page of Havamal"
          css={css`
            cursor: crosshair;
            text-decoration: none;
          `}
        >
        <p>Havamal Official on Facebook</p>
        </a>
        <a 
          href="havamal@email.com"
          aria-label="Havamal Email"
          css={css`
            text-decoration: none;
          `}
        >
          <p>havamal[at]email.com</p>
        </a>
      </Contact>

      <Contact>
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
      </Contact>

      <Contact>
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
      </Contact>
    </>
  )
}