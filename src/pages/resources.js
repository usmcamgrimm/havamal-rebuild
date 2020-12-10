import React from 'react'

import SEO from "../components/seo"
import Layout from '../components/Layout'

import Bandbond from '../resources/icons/bandbond'
import Bandcamp from '../resources/icons/bandcamp'
import Facebook from '../resources/icons/facebook'
import Instagram from '../resources/icons/instagram'
import Youtube from '../resources/icons/youtube'
import AGR from '../resources/icons/AGR'
import Horde from '../resources/icons/horde'

const ResourcesPage = () => (
  <>
    <SEO title="Resources" />
    <Layout>
      <h1 className="text-6xl text-center my-16 font-pirata font-medium text-blue-lighter">
        Resources
      </h1>
      <div id="linksContainer">
        <div className="flex flex-row justify-center lg:space-x-3 md:space-x-2">
          <Bandbond />
          <Bandcamp />
          <Facebook />
          <Instagram />
          <Youtube />
        </div>
      </div>
      <div id="bannerLinks">
        <div className="flex flex-row justify-center lg:space-x-3 md:space-x-2">
          <AGR />
          <Horde />
        </div>
      </div>
    </Layout>
  </>
)

export default ResourcesPage