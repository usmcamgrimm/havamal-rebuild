import React from 'react'
import Layout from '../components/Layout'
import HavamalVideos from '../components/HavamalVideos'
import { StaticImage } from 'gatsby-plugin-image'
import { css } from '@emotion/react'
import styled from '@emotion/styled'

const Line = styled.hr`
  width: 48%;
  margin: 0 auto;
  margin-top: 2rem;
  margin-bottom: 2rem;
  border-bottom: 1px solid rgba(147, 147, 147, 0.4);
`;
const AlbumContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;
const AlbumDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 768px) {
    margin-top: 1.5rem;
  }
`;
const AlbumTitle = styled.h3`
  font-family: grenze;
  color: #ffffff;
  font-size: 1.75rem;
  margin: 0;
  font-weight: normal;
`;
const ReleaseInfo = styled.h4`
  font-family: grenze;
  color: #ffffff;
  font-size: 1.25rem;
  font-weight: normal;
  padding-bottom: .25rem;
`;

export default function MusicPage() {
  return (
    <Layout>
      <h1 css={css`
        font-family: grenze;
        font-size: 2rem;
        color: #004b87;
        text-align: center;
        margin-top: 4rem;
        margin-bottom: 4rem;
      `}>The Hymns of Havamal</h1>
    <section id="albumsList">
      <AlbumContainer>
        <StaticImage
          src="../resources/albums/tsc.jpg"
          alt="album cover for The Shadow Chapter"
          layout="constrained"
          placeholder="blurred"
          css={css`
            margin-right: 2rem;
            max-width: 500px;
            height: auto;
            box-shadow: 2px 4px 12px #000000;
            @media screen and (max-width: 500px) {
              margin: 0 auto;
              max-width: 90%;
            }
          `}
        />
        <AlbumDetails>
          <AlbumTitle>The Shadow Chapter</AlbumTitle>
          <ReleaseInfo>Art Gates Records | May 2021</ReleaseInfo>
          <iframe 
            title="The Shadow Chapter Sample on Spotify" 
            src="https://open.spotify.com/embed/album/1I4MAMVeh0dqfe0tz1f5Gh" 
            width="325" 
            height="360" 
            frameBorder="0" 
            allowtransparency="true" 
            allow="encrypted-media"
          ></iframe>
        </AlbumDetails>
      </AlbumContainer>

        <Line />

        <AlbumContainer>
          <StaticImage
            src="../resources/albums/tfy.jpg"
            alt="album cover for Tales From Yggdrasil"
            layout="constrained"
            placeholder="blurred"
            css={css`
              margin-right: 2rem;
              max-width: 500px;
              height: auto;
              box-shadow: 2px 4px 12px #000000;
              @media screen and (max-width: 500px) {
                margin: 0 auto;
                max-width: 90%;
              }
          `}
          />
          <AlbumDetails>
            <AlbumTitle>Tales From Yggdrasil</AlbumTitle>
            <ReleaseInfo>Art Gates Records | June 2019</ReleaseInfo>
            <iframe 
              title="Tales From Yggdrasil Sample on Spotify" 
              src="https://open.spotify.com/embed/album/6WIQW0JtBAgoKuUuuwclcP" 
              width="325" 
              height="360" 
              frameBorder="0" 
              allowtransparency="true" 
              allow="encrypted-media"
            ></iframe>
          </AlbumDetails>
        </AlbumContainer>

        <Line />

        <AlbumContainer css={css`padding-bottom: 2rem;`}>
          <StaticImage
            src="../resources/albums/cotn.jpg"
            alt="album cover for Call of The North"
            layout="constrained"
            placeholder="blurred"
            css={css`
              margin-right: 2rem;
              max-width: 500px;
              height: auto;
              box-shadow: 2px 4px 12px #000000;
              @media screen and (max-width: 500px) {
                margin: 0 auto;
                max-width: 90%;
              }
          `}
          />
          <AlbumDetails>
            <AlbumTitle>Call Of The North</AlbumTitle>
            <ReleaseInfo>Independent | June 2017</ReleaseInfo>
            <iframe 
              title="Call Of The North Sample on Spotify" 
              src=" https://open.spotify.com/embed/album/2GrDVeDkYT0IEIHiwNeaQz" 
              width="325" 
              height="360" 
              frameBorder="0" 
              allowtransparency="true" 
              allow="encrypted-media"
            ></iframe>
          </AlbumDetails>
        </AlbumContainer>
      </section>

      <section id="videoList">
        <HavamalVideos />
      </section>
    </Layout>
  )
}