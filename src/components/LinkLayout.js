import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import styled from '@emotion/styled'

const LinkGrid = styled.div`
  display: grid;
  place-items: center;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(300, 1fr));
  @media screen and (max-width: 500px) {
    display: flex;
    justify-content: center;
    padding-right: 1rem;
    padding-left: 1rem;
  }
`;
const LinkItem = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  max-width: 90%;
  .gatsby-image-wrapper {
    margin: 8px;
  }
`;
const BannerLinks = styled.div`
  display: flex;
  justify-content: center;
`;

export default function LinkLayout() {
  return (
    <>
      <LinkGrid>
        <LinkItem>
          <StaticImage
            src="../resources/icons/bandcamp.png"
            alt="bandcamp icon"
            layout="constrained"
            width={50}
          />
          <StaticImage
            src="../resources/icons/bandbond.png"
            alt="bandbond icon"
            layout="constrained"
            width={50}
          />
          <StaticImage
            src="../resources/icons/facebook.png"
            alt="facebook icon"
            layout="constrained"
            width={50}
          />
          <StaticImage
            src="../resources/icons/instagram.png"
            alt="instagram icon"
            layout="constrained"
            width={50}
          />
          <StaticImage
            src="../resources/icons/spotify.png"
            alt="spotify icon"
            layout="constrained"
            width={50}
          />
          <StaticImage
            src="../resources/icons/youtube.png"
            alt="youtube icon"
            layout="constrained"
            width={50}
          />
        </LinkItem>
      </LinkGrid>
      <LinkGrid>
        <BannerLinks>
          <StaticImage
            src="../resources/icons/AGR.png"
            alt="art gates records icon"
            layout="fixed"
            width={400}
          />
        </BannerLinks>
      </LinkGrid>
    </>
  )
}