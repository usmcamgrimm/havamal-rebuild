import React from 'react'

import Bandbond from '../resources/icons/bandbond'
import Bandcamp from '../resources/icons/bandcamp'
import Facebook from '../resources/icons/facebook'
import Instagram from '../resources/icons/instagram'
import Youtube from '../resources/icons/youtube'
import AGR from '../resources/icons/AGR'
import Horde from '../resources/icons/horde'

export default function LinkLayout() {
  return (
    <div className="flex flex-col justify-between py-6">
      <div className="flex flex-row justify-center space-x-2 lg:space-x-8">
        <Bandcamp />
        <Facebook />
        <Bandbond />
        <Instagram />
        <Youtube />
      </div>
      <div className="flex flex-row justify-center pt-8 space-x-3">
        <AGR />
        <Horde />
      </div>
    </div>
  )
}