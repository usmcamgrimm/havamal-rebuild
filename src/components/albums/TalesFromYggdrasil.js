import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const TalesFromYggdrasil = () => {
  const data = useStaticQuery(graphql`
    query {
      TFY: file(relativePath: { eq: "albums/tfy.jpg" }) {
        childImageSharp {
          fixed(width: 400, height: 400) {
            ...GatsbyImageSharpFixed_noBase64
          }
        }
      }
    }
  `)

  return <Img fixed={data.TFY.childImageSharp.fixed} />
}

export default TalesFromYggdrasil