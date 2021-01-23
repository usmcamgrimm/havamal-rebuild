import React from 'react'

import Andreas from "./BandQueries/Andreas"
import Bjorn from "./BandQueries/Bjorn"
import Kjell from "./BandQueries/Kjell"
import Lennie from "./BandQueries/Lennie"

const HymnWeavers = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <p className="font-grenze text-lg lg:text-xl text-white">
          Andreas Herlogsson - Drums
          </p>
        <p className="font-grenze text-lg lg:text-xl text-white">
          Björn Larsson - Vocals
          </p>
        <p className="font-grenze text-lg lg:text-xl text-white">
          Kjell Gilluisson - Guitar
          </p>
        <p className="font-grenze text-lg lg:text-xl text-white">
          Lennie Spetze - Guitar / Keyboard
          </p>
      </div>
      <div className="lg:container flex lg:flex-nowrap justify-center items-center space-x-4 p-6">
        <Andreas />
        <Bjorn />
        <Kjell />
        <Lennie />
      </div>
    </>
  )
}

export default HymnWeavers