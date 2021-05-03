import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import styled from 'styled-components'

const StyledBgImage = styled(BackgroundImage)`
  width: 100%;
  min-height: 100vh;
  z-index: -1;
`;

export default function BgImage({ children }) {
  const data = useStaticQuery(graphql`
    query {
      background: file(relativePath: { eq: "images/stage.jpg" }) {
        childImageSharp {
          fluid(quality: 90) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      desktopBackground: file(relativePath: { eq: "band-photos/bandPhoto.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2000, quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  const bg = [
    data.background.childImageSharp.fluid,
    {
      ...data.desktopBackground.childImageSharp.fluid,
      media: `(min-width: 1025px)`,
    }
  ]

  return (
    <StyledBgImage
      fluid={bg}
    >
      {children}
    </StyledBgImage>
  )
}