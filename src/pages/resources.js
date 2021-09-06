import React from 'react'
import Layout from '../components/Layout'
//import Nidhoggr from '../components/Nidhoggr'
import ContactForm from '../components/ContactForm'
import ContactInfo from '../components/ContactInfo'

import { css } from '@emotion/react'
import styled from '@emotion/styled'

// const BackgroundWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `;
const ContactContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  background: rgba(0, 0, 0, 0.6);
  border-radius: 5px;
  width: 60%;
  margin: 0 auto;
  padding-top: 3rem;
  box-shadow: 6px 6px 12px #000000;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
    left: 0;
    width: 90%;
  }
`;
const ContactBox = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
const MerchWrapper = styled.div`
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
      {/* <BackgroundWrapper>
        <Nidhoggr
          css={css`
            z-index: -1;
          `}
        />
      </BackgroundWrapper> */}

      <section id="contactArea">
        <p
          css={css`
            font-family: grenze;
            font-size: clamp(1.5rem, 4vw, 2rem);
            color: #66add9;
            text-align: center;
            padding: 12px 1rem;
            margin-bottom: 12px;
          `}
        >
          Complete the form or use the link to send an email to Havamal
        </p>
        <ContactContainer>
          <ContactBox>
            <ContactForm />
          </ContactBox>
          <ContactBox>
            <ContactInfo />
          </ContactBox>
        </ContactContainer>
      </section>

      <section id="merch">
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
      </section>
    </Layout>
  )
}