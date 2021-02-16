import React from 'react'
import styled from 'styled-components'

import Bandbond from '../resources/icons/bandbond'
import Bandcamp from '../resources/icons/bandcamp'
import Facebook from '../resources/icons/facebook'
import Instagram from '../resources/icons/instagram'
import Youtube from '../resources/icons/youtube'
import AGR from '../resources/icons/AGR'
import Horde from '../resources/icons/horde'

const LinkGrid = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

const LinkItem = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  max-width: 70%;
  .gatsby-image-wrapper {
    margin: 1rem;
  }
`;

const BannerLinks = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 8px;
`;

export default function LinkLayout() {
  return (
    <>
      <LinkGrid>
        <LinkItem>
          <Bandcamp className="m-12" />
          <Facebook className="p-12" />
          {/* <Bandbond className="p-12" /> */}
          <Instagram className="p-12" />
          <Youtube className="p-12" />
        </LinkItem>
      </LinkGrid>
      <LinkGrid>
        <BannerLinks>
          <AGR className="pr-4" />
          <Horde className="pl-4" />
        </BannerLinks>
      </LinkGrid>
    </>
  )
}