import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Andreas = () => {
  const data = useStaticQuery(graphql`
    query {
      AndreasHerlogsson: file(relativePath: { eq: "band-photos/andreas.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 250) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  `)

  return <Img fluid={data.AndreasHerlogsson.childImageSharp.fluid} />
}

export default Andreas