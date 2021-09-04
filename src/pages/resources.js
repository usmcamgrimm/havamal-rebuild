import React from 'react'
import Layout from '../components/Layout'
import Nidhoggr from '../components/Nidhoggr'
import ContactForm from '../components/ContactForm'
import ContactInfo from '../components/ContactInfo'

import { css } from '@emotion/react'
import styled from '@emotion/styled'

const BackgroundWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ContactContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  background: rgba(0, 0, 0, 0.6);
  border-radius: 5px;
  width: 80%;
  margin: 0 auto;
`;
const ContactBox = styled.div`
  width: 50%;
  display: flex
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 2px solid #66add9;
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