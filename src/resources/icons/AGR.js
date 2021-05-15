import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from 'gatsby-plugin-image'

const AGR = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "icons/AGR.png" }) {
        childImageSharp {
          gatsbyImageData(
            width: 300
          )
        }
      }
    }
  `)

  if (!data?.placeholderImage?.childImageSharp?.gatsbyImageData) {
    return <div>Picture not found</div>
  }

  return <a href="https://artgatesrecords.com/" target="_blank" rel="noreferrer" aria-label="Art Gates Records"><GatsbyImage image={data.placeholderImage.childImageSharp.gatsbyImageData} className="rounded-sm cursor-pointer" /></a>
}

export default AGR