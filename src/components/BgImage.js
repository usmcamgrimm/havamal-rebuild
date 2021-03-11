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
  const data = useStaticQuery(graphql`
    query {
      background: file(relativePath: { eq: "images/stage2.jpg" }) {
        childImageSharp {
          fluid(quality: 90) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  const bg = data.background.childImageSharp.fluid

  return (
    <StyledBgImage 
      fluid={bg}
    >
      {children}
    </StyledBgImage>
  )
}
