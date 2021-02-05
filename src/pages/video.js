import React from 'react'
import SEO from '../components/seo'
import styled from 'styled-components'
import HavamalVideo from '../components/SingleVideo'

const YTLink = styled.div`
  a {
    text-decoration: none;
  }
  a:hover {
    color: #66add9;
  }
`;

export default function VideoPage() {
  return(
    <>
      <SEO title="Videos" />
      <div className="font-grenze text-center text-white text-3xl mt-12">
        Find more videos on YouTube:
      </div>
      <YTLink className="font-grenze text-center text-white text-2xl mt-6">
        <a href="https://www.youtube.com/channel/UCmGfesgQAVTgpJqGf9dt3wA/videos" target="_blank" rel="noreferrer">
          HAVAMAL OFFICIAL
        </a>
      </YTLink>
    </>
  )
}