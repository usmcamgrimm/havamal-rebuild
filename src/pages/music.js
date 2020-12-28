import React from 'react'

import SEO from "../components/seo"
import Layout from '../components/Layout'
import CallOfTheNorth from '../components/albums/CallOfTheNorth'
import TalesFromYggdrasil from '../components/albums/TalesFromYggdrasil'

const MusicPage = () => (
  <>
    <SEO title="Music" />
    <Layout>
      <h1 className="text-6xl text-center my-16 font-pirata font-medium text-blue-lighter">
        Music
      </h1>
      <div className="flex justify-center items-center space-x-6 px-6">
        <TalesFromYggdrasil />
        <div className="flex flex-col">
          <iframe src="https://open.spotify.com/embed/album/6WIQW0JtBAgoKuUuuwclcP" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
        </div>
      </div>
      <div className="flex">
        <CallOfTheNorth />
      </div>
    </Layout>
  </>
)

export default MusicPage