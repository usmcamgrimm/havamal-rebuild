import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image";
import styled from 'styled-components'

const AlbumCover = styled.div`
  .gatsby-image-wrapper {
    box-shadow: 5px 3px 16px rgba(0, 0, 0, 0.5);
  }
`;

const CallOfTheNorth = () => {
  const data = useStaticQuery(graphql`{
  COTN: file(relativePath: {eq: "albums/cotn.jpg"}) {
    childImageSharp {
      gatsbyImageData(width: 400, height: 400, placeholder: NONE, layout: FIXED)
    }
  }
}
`)

  return (
    <AlbumCover>
      <GatsbyImage image={data.COTN.childImageSharp.gatsbyImageData} />
    </AlbumCover>
  );
}

export default CallOfTheNorth