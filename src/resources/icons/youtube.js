import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Youtube= () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "icons/youtube.png" }) {
        childImageSharp {
          fluid(maxWidth: 96) {
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

  return <Img fluid={data.placeholderImage.childImageSharp.fluid} className="rounded-lg" />
}

export default Youtube