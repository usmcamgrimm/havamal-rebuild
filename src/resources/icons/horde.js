import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image";

const Horde = () => {
  const data = useStaticQuery(graphql`{
  placeholderImage: file(relativePath: {eq: "icons/horde.png"}) {
    childImageSharp {
      gatsbyImageData(width: 300, placeholder: NONE, layout: CONSTRAINED)
    }
  }
}
`)

  if (!data?.placeholderImage?.childImageSharp?.gatsbyImageData) {
    return <div>Picture not found</div>
  }

  return (
    <a href="https://www.facebook.com/groups/338634033565609" target="_blank" rel="noreferrer" aria-label="Hordes of Havamal"><GatsbyImage
      image={data.placeholderImage.childImageSharp.gatsbyImageData}
      className="rounded-sm" /></a>
  );
}

export default Horde