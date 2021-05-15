import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from 'gatsby-plugin-image'

const Bandbond = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "icons/bandbond.png" }) {
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

  return <a href="https://bandbond.com/" target="_blank" rel="noreferrer" aria-label="Bandbond"><GatsbyImage image={data.placeholderImage.childImageSharp.gatsbyImageData} className="rounded-sm" /></a>
}

export default Bandbond