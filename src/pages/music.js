import React from 'react'

import SEO from "../components/seo"
import CallOfTheNorth from '../components/albums/CallOfTheNorth'
import TalesFromYggdrasil from '../components/albums/TalesFromYggdrasil'
import styled from 'styled-components'

const Line = styled.hr`
  width: 75%;
  margin: 0 auto;
  margin-top: 1rem;
  border: 1px solid #606060;
`;

const MusicPage = () => (
  <>
    <SEO title="Music" />
    <h1 className="text-6xl text-center my-16 font-pirata font-medium text-blue-lighter">
      Music
    </h1>
    <div className="flex flex-wrap justify-center items-center space-x-6 px-6">
      <TalesFromYggdrasil />
      <div className="flex flex-col items-center">
        <h3 className="font-grenze text-white text-2xl">Tales From Yggdrasil</h3>
        <h4 className="font-grenze text-white text-lg pb-2">Art Gates Records | June 2019</h4>
        <iframe title="Tales From Yggdrasil Sample on Spotify" src="https://open.spotify.com/embed/album/6WIQW0JtBAgoKuUuuwclcP" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
      </div>
    </div>

    <Line />

    <div className="flex flex-wrap justify-center items-center space-x-6 px-6 pt-16 pb-10">
      <CallOfTheNorth />
      <div className="flex flex-col items-center">
        <h3 className="font-grenze text-white text-2xl">Call Of The North</h3>
        <h4 className="font-grenze text-white text-lg pb-2">Independent | June 2017</h4>
        <iframe title="Call Of The North Sample on Spotify" src=" https://open.spotify.com/embed/album/2GrDVeDkYT0IEIHiwNeaQz" width="300" height="310" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
      </div>
    </div>
  </>
)

export default MusicPage