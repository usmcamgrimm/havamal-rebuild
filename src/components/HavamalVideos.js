import React from 'react'
import HavamalVideo from './SingleVideo'
import styled from '@emotion/styled'

const VideoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function HavamalVideos ({ id }) {
  return (
    <div id={id}>
      <VideoContainer>
      <HavamalVideo
        videoURL="https://www.youtube.com/embed/0zJ9InTWRwo"
        videoTitle="Hel"
      />
      <HavamalVideo
        videoURL="https://www.youtube.com/embed/KOkd-_kT7fM"
        videoTitle="Kraken"
      />
      <HavamalVideo
        videoURL="https://www.youtube.com/embed/Ks1P1zgKLuQ"
        videoTitle="Live Stream Rehearsal"
      />
      <HavamalVideo
        videoURL="https://www.youtube.com/embed/nQYwDQd5SBk"
        videoTitle="Berserker"
      />
      <HavamalVideo
        videoURL="https://www.youtube.com/embed/5nb_1gEoIko"
        videoTitle="Ginnungagap"
      />
    </VideoContainer>
    </div>
  )
}
