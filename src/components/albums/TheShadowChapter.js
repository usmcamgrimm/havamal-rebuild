import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image";
import styled from 'styled-components'

const AlbumCover = styled.div`
  .gatsby-image-wrapper {
    box-shadow: 5px 3px 16px rgba(0, 0, 0, 0.5);
  }
`;

const TheShadowChapter = () => {
  const data = useStaticQuery(graphql`{
  TSC: file(relativePath: {eq: "albums/tsc.jpg"}) {
    childImageSharp {
      gatsbyImageData(width: 400, height: 400, placeholder: NONE, layout: FIXED)
    }
  }
}
`)

  return (
    <AlbumCover>
      <GatsbyImage image={data.TSC.childImageSharp.gatsbyImageData} />
    </AlbumCover>
  );
}

export default TheShadowChapter