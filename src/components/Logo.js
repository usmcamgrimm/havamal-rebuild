import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

export default function Logo() {
  return (
    <StaticImage
      src="../resources/images/havamal_logo.png"
      alt="havamal logo"
      layout="fullWidth"
      placeholder="tracedSVG"
      breakpoints={[500, 769, 1025, 1440]}
    />
  )
}