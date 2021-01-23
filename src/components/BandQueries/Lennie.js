import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Lennie = () => {
  const data = useStaticQuery(graphql`
    query {
      LennieSpetze: file(relativePath: { eq: "band-photos/lennie.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 250) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  `)

  return <Img fluid={data.LennieSpetze.childImageSharp.fluid} />
}

export default Lennie