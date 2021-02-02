import React from 'react'
import SEO from '../components/seo'
import styled from 'styled-components'

const VideoContainer = styled.div`
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
`;

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
      <VideoContainer className="mt-12 lg:px-24 lg:mx-32">
        <div className="aspect-w-16 aspect-h-9">
          <iframe title="Berserker" src="https://www.youtube.com/embed/nQYwDQd5SBk" frameBorder="0"allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
        <div className="aspect-w-16 aspect-h-9">
          <iframe title="Ginnungagap" src="https://www.youtube.com/embed/5nb_1gEoIko" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
        <div className="aspect-w-16 aspect-h-9">
          <iframe title="Ragnarok, My Favorite Havamal Song" src="https://www.youtube.com/embed/w5ojozH8IAs" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
        <div className="aspect-w-16 aspect-h-9">
          <iframe title="Live Stream Rehearsal" src="https://www.youtube.com/embed/Ks1P1zgKLuQ" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
        <div className="aspect-w-16 aspect-h-9">
          <iframe title="Jotun War" src="https://www.youtube.com/embed/sc_IlYJ1Fps" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
        <div className="aspect-w-16 aspect-h-9">
          <iframe title="Death of Balder" src="https://www.youtube.com/embed/uAM1b2z75Xg" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
        <div className="aspect-w-16 aspect-h-9">
          <iframe title="Dawn of the Frost Giants" src="https://www.youtube.com/embed/1WqMnulsCI8" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
        <div className="aspect-w-16 aspect-h-9">
          <iframe title="Death of Balder" src="https://www.youtube.com/embed/nQDsz0Cz_EI" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
      </VideoContainer>
    </>
  )
}