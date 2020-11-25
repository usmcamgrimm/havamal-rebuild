import React from 'react'

import SEO from "../components/seo"
import Nav from '../components/Navbar'

const MusicPage = () => (
  <>
    <SEO title="Music" />
    <Nav />
    <h1 className="text-4xl text-center my-16 font-bold text-blue-lighter">
        Music
    </h1>
  </>
)

export default MusicPage