import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage } from "gatsby-plugin-image";

export default function AxeIcon() {
  const data = useStaticQuery(graphql`{
  AxeIcon: file(relativePath: {eq: "images/axes.png"}) {
    childImageSharp {
      gatsbyImageData(width: 50, placeholder: NONE, layout: FIXED)
    }
  }
}
`)

  return <GatsbyImage image={data.AxeIcon.childImageSharp.gatsbyImageData} alt="menu button" />;
}