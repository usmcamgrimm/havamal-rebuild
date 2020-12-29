import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Horde = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "icons/horde.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid_noBase64
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
    }
  `)

  if (!data?.placeholderImage?.childImageSharp?.fluid) {
    return <div>Picture not found</div>
  }

  return <a href="https://www.facebook.com/groups/338634033565609" target="_blank" rel="noreferrer" aria-label="Hordes of Havamal"><Img fluid={data.placeholderImage.childImageSharp.fluid} className="rounded-sm" /></a>
}

export default Horde