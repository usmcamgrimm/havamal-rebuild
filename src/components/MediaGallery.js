import React from 'react'
import { useStatucQuery, graphql } from 'gatsby'

export default function MediaGallery() {
  const data = useStaticQuery(graphql`
   query CloudinaryImage{
     allCloudinaryMedia {
       edges {
         node {
           secure_url
         }
       }
     }
   }
  `)
  const HavamalImages = data.allCoudinaryMedia.edges;
}