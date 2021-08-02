import React from 'react';
import { css } from '@emotion/react'
import styled from '@emotion/styled'

const VideoContainer = styled.div`
  overflow: hidden;
  position: relative;
  width: 100%;
  ::after {
    padding-top: 56.25%;
    display: block;
    content: '';
`;


export default function HavamalVideo ({ videoURL, videoTitle, ...props }) {
  return (
    <VideoContainer>
      <iframe
        src={videoURL}
        title={videoTitle}
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        css={css`
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        `}
      />
    </VideoContainer>
  )
}