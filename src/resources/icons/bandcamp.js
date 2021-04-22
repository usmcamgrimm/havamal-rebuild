import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image";

const Bandcamp = () => {
  const data = useStaticQuery(graphql`{
  placeholderImage: file(relativePath: {eq: "icons/bandcamp.png"}) {
    childImageSharp {
      gatsbyImageData(width: 60, placeholder: NONE, layout: CONSTRAINED)
    }
  }
}
`)

  if (!data?.placeholderImage?.childImageSharp?.gatsbyImageData) {
    return <div>Picture not found</div>
  }

  return (
    <a href="https://havamal.bandcamp.com/" target="_blank" rel="noreferrer" aria-label="Bandcamp"><GatsbyImage
      image={data.placeholderImage.childImageSharp.gatsbyImageData}
      className="rounded-sm" /></a>
  );
}

export default Bandcamp