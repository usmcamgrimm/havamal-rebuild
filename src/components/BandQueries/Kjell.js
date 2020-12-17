import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Kjell = () => {
  const data = useStaticQuery(graphql`
    query {
      KjellGilliusson: file(relativePath: { eq: "band-photos/kjell.png" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  `)

  return <Img fluid={data.KjellGilliusson.childImageSharp.fluid} />
}

export default Kjell