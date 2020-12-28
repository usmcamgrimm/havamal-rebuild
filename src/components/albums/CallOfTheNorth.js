import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const CallOfTheNorth = () => {
  const data = useStaticQuery(graphql`
    query {
      COTN: file(relativePath: { eq: "albums/cotn.jpg" }) {
        childImageSharp {
          fixed(width: 400, height: 400) {
            ...GatsbyImageSharpFixed_noBase64
          }
        }
      }
    }
  `)

  return <Img fixed={data.COTN.childImageSharp.fixed} />
}

export default CallOfTheNorth