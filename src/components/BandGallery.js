import React from 'react'

import Andreas from "./BandQueries/Andreas"
import Bjorn from "./BandQueries/Bjorn"
import Kjell from "./BandQueries/Kjell"
import Lennie from "./BandQueries/Lennie"

const BandGallery = () => {
    return (
        <div>
            <div className="lg:container flex lg:flex-nowrap justify-center items-center space-x-4 p-6">
                <Andreas />
                <Bjorn />
                <Kjell />
                <Lennie />
            </div>
        </div>
    )
}

export default BandGallery