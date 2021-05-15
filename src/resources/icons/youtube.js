import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from 'gatsby-plugin-image'

const Youtube= () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "icons/youtube.png" }) {
        childImageSharp {
          gatsbyImageData(
            width: 60
          )
        }
      }
    }
  `)

  if (!data?.placeholderImage?.childImageSharp?.gatsbyImageData) {
    return <div>Picture not found</div>
  }

  return <a href="https://www.youtube.com/channel/UCmGfesgQAVTgpJqGf9dt3wA/videos" target="_blank" rel="noreferrer" aria-label="YouTube"><GatsbyImage image={data.placeholderImage.childImageSharp.gatsbyImageData} className="rounded-sm" /></a>
}

export default Youtube