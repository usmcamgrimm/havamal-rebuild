import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from 'styled-components'

const AlbumCover = styled.div`
  .gatsby-image-wrapper {
    box-shadow: 5px 3px 16px rgba(0, 0, 0, 0.5);
  }
`;

const TalesFromYggdrasil = () => {
  const data = useStaticQuery(graphql`
    query {
      TFY: file(relativePath: { eq: "albums/tfy.jpg" }) {
        childImageSharp {
          fixed(width: 400, height: 400) {
            ...GatsbyImageSharpFixed_noBase64
          }
        }
      }
    }
  `)

  return (
    <AlbumCover>
      <Img fixed={data.TFY.childImageSharp.fixed} />
    </AlbumCover>
  )
}

export default TalesFromYggdrasil