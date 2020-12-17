import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Bjorn = () => {
  const data = useStaticQuery(graphql`
    query {
      BjornLarsson: file(relativePath: { eq: "band-photos/bjorn.png" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  `)

  return <Img fluid={data.BjornLarsson.childImageSharp.fluid} />
}

export default Bjorn