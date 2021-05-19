import React from 'react'

import SEO from "../components/seo"
import MediaGallery from '../components/MediaGallery'
import SimpleReactLightbox from 'simple-react-lightbox'

export default function MediaPage() {
  return (
    <>
      <SEO title="Media" />
      <h1 className="text-6xl text-center my-16 font-pirata font-medium text-cyan">
        Media
      </h1>
      <SimpleReactLightbox>
        <MediaGallery />
      </SimpleReactLightbox>
    </>
  )
}