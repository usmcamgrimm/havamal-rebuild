import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from 'gatsby-plugin-image'

const Facebook = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "icons/facebook.png" }) {
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

  return <a href="https://www.facebook.com/Havamalofficial" target="_blank" rel="noreferrer" aria-label="Facebook"><GatsbyImage image={data.placeholderImage.childImageSharp.gatsbyImageData} className="rounded-sm" /></a>
}

export default Facebook