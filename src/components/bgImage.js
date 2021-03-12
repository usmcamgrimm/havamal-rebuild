import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import styled from 'styled-components'

const BGImage = styled(BackgroundImage)`
  max-width: 100%;
  height: auto;
  z-index: -1;
`;

export default function bgImage ({ children }) {
  const data = useStaticQuery(graphql`
    query {
      bgimg: file(relativePath: { eq: "images/stage2.jpg" }) {
        childImageSharp {
          fluid(quality: 90){
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  const bg = data.bgimg.childImageSharp.fluid;

  return (
    <BGImage fluid={bg}>
      {children}
    </BGImage>
  )
}