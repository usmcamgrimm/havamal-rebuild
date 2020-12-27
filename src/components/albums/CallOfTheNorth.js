import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const CallOfTheNorth = () => {
  const data = useStaticQuery(graphql`
    query {
      COTN: file(relativePath: { eq: "albums/cotn.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  `)

  return <Img fluid={data.COTN.childImageSharp.fluid} />
}

export default CallOfTheNorth