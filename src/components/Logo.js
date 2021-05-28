import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

export default function Logo() {
  return (
    <StaticImage
      src="../resources/images/havamal_logo.png"
      alt="havamal logo"
      layout="fullWidth"
      placeholder="blurred"
      breakpoints={[400, 769, 1025, 1440]}
    />
  )
}