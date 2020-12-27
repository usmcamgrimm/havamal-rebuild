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
      <TalesFromYggdrasil />
      <CallOfTheNorth />
    </Layout>
  </>
)

export default MusicPage