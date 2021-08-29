import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

export default function Nidhoggr() {
  return(
    <StaticImage
      src='../resources/images/Nidhoggr.jpg'
      alt="The dragon Nidhöggr"
      placeholder="blurred"
      layout="constrained"
    />
  )
}