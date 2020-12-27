import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const TalesFromYggdrasil = () => {
  const data = useStaticQuery(graphql`
    query {
      TFY: file(relativePath: { eq: "albums/tfy.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  `)

  return <Img fluid={data.TFY.childImageSharp.fluid} />
}

export default TalesFromYggdrasil