import React from 'react'

import SEO from "../components/seo"
import MediaGallery from '../components/MediaGallery'
import SimpleReactLightbox from 'simple-react-lightbox'

export default function PhotosPage() {
  return (
    <>
      <SEO title="Photos" />
      <h1 className="text-6xl text-center my-16 font-pirata font-medium text-blue-lighter">
        Photos
      </h1>
      <SimpleReactLightbox>
        <MediaGallery />
      </SimpleReactLightbox>
    </>
  )
}