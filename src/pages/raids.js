import React from 'react'

import SEO from "../components/seo"
import Layout from '../components/Layout'
import RaidLayout from '../components/RaidLayout'

const RaidsPage = () => (
  <>
    <SEO title="Raids" />
    <Layout>
      <h1 className="text-6xl text-center my-16 font-pirata font-medium text-blue-lighter">
          Raids
      </h1>
      <RaidLayout>
        <p>Järfälla Metal Fest - 29 May 2021</p>
        <p>Fredagsmangel, Järfälla, Sweden</p>
        <a href="https://www.facebook.com/fredagsmangel/photos/a.2228077407277660/3125643040854421" target="_blank" rel="noreferrer">
          <p className="font-grenze text-white">INFO</p>
        </a>
        <a href="https://www.google.com/maps/place/Drabantv%C3%A4gen+11,+177+50+J%C3%A4rf%C3%A4lla,+Sweden/@59.4246958,17.8351142,17.75z/data=!4m5!3m4!1s0x465fa1d8b6ffe2eb:0x853a0a00e50acb6!8m2!3d59.4240721!4d17.8380435" target="_blank" rel="noreferrer">
          <p className="font-grenze text-white">MAP</p>
        </a>
      </RaidLayout>
    </Layout>
  </>
)

export default RaidsPage