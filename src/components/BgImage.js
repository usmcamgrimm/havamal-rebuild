import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import styled from 'styled-components'

const StyledBgImage = styled(BackgroundImage)`
  width: 100%;
  height: 100vh;
  z-index: -1;
`;

export default function BgImage({ children }) {
  const data = useStaticQuery(graphql`{
  background: file(relativePath: {eq: "images/stage.jpg"}) {
    childImageSharp {
      gatsbyImageData(quality: 90, layout: FULL_WIDTH)
    }
  }
}
`)

  const bg = data.background.childImageSharp.gatsbyImageData

  return (
    <StyledBgImage
      fluid={bg}
    >
      {children}
    </StyledBgImage>
  )
}