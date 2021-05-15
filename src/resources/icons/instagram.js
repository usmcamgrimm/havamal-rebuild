import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from 'gatsby-plugin-image'

const Instagram = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "icons/instagram.png" }) {
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

  return <a href="https://www.instagram.com/officialhavamal/" target="_blank" rel="noreferrer" aria-label="Instagram"><GatsbyImage image={data.placeholderImage.childImageSharp.gatsbyImageData} className="rounded-sm" /></a>
}

export default Instagram