import React from 'react'
import SEO from '../components/SEO'
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
      <div className="container mx-auto mt-12">
        <div className="grid lg:grid-cols-2 md:gap-16">
          <HavamalVideo
              videoURL="https://www.youtube.com/embed/KOkd-_kT7fM"
              videoTitle="Kraken"
          />
          <HavamalVideo
              videoURL="https://www.youtube.com/embed/w6Gy4ZGG5eg"
              videoTitle="Nidhöggr"
          />
          <HavamalVideo
            videoURL="https://www.youtube.com/embed/nQYwDQd5SBk"
            videoTitle="Berserker"
          />
          <HavamalVideo
            videoURL="https://www.youtube.com/embed/5nb_1gEoIko"
            videoTitle="Ginnungagap"
          />
          <HavamalVideo
            videoURL="https://www.youtube.com/embed/w5ojozH8IAs"
            videoTitle="Ragnarok, My favorite Havamal song"
          />
          <HavamalVideo
            videoURL="https://www.youtube.com/embed/Ks1P1zgKLuQ"
            videoTitle="Live Stream Rehearsal"
          />
          <HavamalVideo
            videoURL="https://www.youtube.com/embed/sc_IlYJ1Fps"
            videoTitle="Jotun War"
          />
          <HavamalVideo
            videoURL="https://www.youtube.com/embed/1WqMnulsCI8"
            videoTitle="Dawn of the Frost Giants (Live)"
          />
        </div>
      </div>
    </>
  )
}