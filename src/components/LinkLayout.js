import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { css } from '@emotion/react'
import styled from '@emotion/styled'

const LinkGrid = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 500px) {
    padding-right: 4rem;
    padding-left: 4rem;
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
  margin: 0;
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
          <a 
            href="https://havamal.bandcamp.com/" 
            target="_blank" 
            rel="noreferrer" 
            aria-label="Bandcamp"
            css={css`cursor: crosshair`}
          >
            <StaticImage
              src="../resources/icons/bandcamp.png"
              alt="bandcamp icon"
              layout="constrained"
              width={50}
            />
          </a>
          <a 
            href="https://bandbond.com/" 
            target="_blank" 
            rel="noreferrer" 
            aria-label="Bandbond"
            css={css`cursor: crosshair;`}
          >
            <StaticImage
              src="../resources/icons/bandbond.png"
              alt="bandbond icon"
              layout="constrained"
              width={50}
            />
          </a>
          <a 
            href="https://www.facebook.com/Havamalofficial" 
            target="_blank" 
            rel="noreferrer" 
            aria-label="Facebook"
            css={css`cursor: crosshair`}
          >
            <StaticImage
              src="../resources/icons/facebook.png"
              alt="facebook icon"
              layout="constrained"
              width={50}
            />
          </a>
          <a href="https://www.instagram.com/officialhavamal/" 
            target="_blank" 
            rel="noreferrer" 
            aria-label="Instagram"
            css={css`cursor: crosshair`}
          >
            <StaticImage
              src="../resources/icons/instagram.png"
              alt="instagram icon"
              layout="constrained"
              width={50}
            />
          </a>
          <a
            href="https://open.spotify.com/artist/6ldp4tSRbPDs5VA2w9KXmD?si=2RV3id28Rems8KVYhqp4BQ&dl_branch=1"
            target="_blank" 
            rel="noreferrer" 
            aria-label="Havamal on Spotify"
            css={css`cursor: crosshair`}
          >
            <StaticImage
              src="../resources/icons/spotify.png"
              alt="spotify icon"
              layout="constrained"
              width={50}
            />
          </a>
          <a href="https://www.youtube.com/channel/UCmGfesgQAVTgpJqGf9dt3wA/videos" 
            target="_blank" 
            rel="noreferrer" 
            aria-label="YouTube"
            css={css`cursor: crosshair`}
          >
            <StaticImage
              src="../resources/icons/youtube.png"
              alt="youtube icon"
              layout="constrained"
              width={50}
            />
          </a>
        </LinkItem>
      </LinkGrid>
      <LinkGrid>
        <BannerLinks>
          <a 
            href="https://artgatesrecords.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="Art Gates Records"
            css={css`cursor: crosshair`}
          >
            <StaticImage
              src="../resources/icons/AGR.png"
              alt="art gates records icon"
              layout="constrained"
              width={400}
            />
          </a>
        </BannerLinks>
      </LinkGrid>
    </>
  )
}