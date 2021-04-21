import React from 'react'

import SEO from "../components/seo"
import CallOfTheNorth from '../components/albums/CallOfTheNorth'
import TalesFromYggdrasil from '../components/albums/TalesFromYggdrasil'
import TheShadowChapter from '../components/albums/TheShadowChapter'
import styled from 'styled-components'

const Line = styled.hr`
  width: 48%;
  margin: 0 auto;
  margin-top: 2rem;
  margin-bottom: 2rem;
  border: 1px solid #606060;
`;

export default function MusicPage() {
  return (
    <>
      <SEO title="Music" />
      <h1 className="text-6xl text-center my-16 font-pirata font-medium text-blue-lighter">
        Music
      </h1>
      <div className="flex flex-wrap justify-center items-center space-x-6 px-6">
        <TheShadowChapter />
        <div className="flex flex-col items-center">
          <h3 className="font-grenze text-white text-2xl">The Shadow Chapter</h3>
          <h4 className="font-grenze text-white text-lg pb-2">Art Gates Records | May 2021</h4>
          <ol className="list-inside text-xl font-grenze text-white">
            <li>The North Awakes</li>
            <li>Fenris</li>
            <li>Nidhoggr</li>
            <li>Kraken</li>
            <li>Empire of the Ashen Sun</li>
            <li>Nornir's Call</li>
            <li>Jormungandr</li>
            <li>Hel</li>
            <li>The Curse of Grendel</li>
          </ol>
        </div>
      </div>

      <Line />

      <div className="flex flex-wrap justify-center items-center space-x-6 px-6">
        <TheShadowChapter />
        <div className="flex flex-col items-center">
          <h3 className="font-grenze text-white text-2xl">Kraken</h3>
          <h4 className="font-grenze text-white text-lg pb-2">The Shadow Chapter | Art Gates Records</h4>
          <iframe title="Kraken Sample on Spotify" src="https://open.spotify.com/embed/track/3zcJQkq6eoxWNCbHHyjycI" width="300" height="300" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
        </div>
      </div>

      <Line />

      <div className="flex flex-wrap justify-center items-center space-x-6 px-6">
        <TheShadowChapter />
        <div className="flex flex-col items-center">
          <h3 className="font-grenze text-white text-2xl">Nidhoggr</h3>
          <h4 className="font-grenze text-white text-lg pb-2">The Shadow Chapter | Art Gates Records</h4>
          <iframe title="Nidhoggr Sample on Spotify" src="https://open.spotify.com/embed/track/27zFuccloYJQj9jDd6muU6" width="300" height="300" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
        </div>
      </div>

      <Line />

      <div className="flex flex-wrap justify-center items-center space-x-6 px-6">
        <TalesFromYggdrasil />
        <div className="flex flex-col items-center">
          <h3 className="font-grenze text-white text-2xl">Tales From Yggdrasil</h3>
          <h4 className="font-grenze text-white text-lg pb-2">Art Gates Records | June 2019</h4>
          <iframe title="Tales From Yggdrasil Sample on Spotify" src="https://open.spotify.com/embed/album/6WIQW0JtBAgoKuUuuwclcP" width="300" height="328" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
        </div>
      </div>

      <Line />

      <div className="flex flex-wrap justify-center items-center space-x-6 px-6 pt-6 pb-10">
        <CallOfTheNorth />
        <div className="flex flex-col items-center">
          <h3 className="font-grenze text-white text-2xl">Call Of The North</h3>
          <h4 className="font-grenze text-white text-lg pb-2">Independent | June 2017</h4>
          <iframe title="Call Of The North Sample on Spotify" src=" https://open.spotify.com/embed/album/2GrDVeDkYT0IEIHiwNeaQz" width="300" height="328" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
        </div>
      </div>
    </>
  )
}