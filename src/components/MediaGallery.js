import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

export default function MediaGallery() {
  const data = useStaticQuery(graphql`
    query CloudinaryImage {
      media: allCloudinaryMedia {
        edges {
          node {
            secure_url
            resource_type
          }
        }
      }
    }
  `)

  const HavamalImages = data.media.edges;
  return (
    <div className="container">
      {HavamalImages.map((image, index) => (
        <div key={`${index}-image`}>
          <img src={image.node.secure_url} alt="Havamal photos" />
        </div>
      ))}
    </div>
  )
}