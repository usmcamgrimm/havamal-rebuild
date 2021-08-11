import React from 'react'
import Layout from '../components/Layout'
import MediaGallery from '../components/MediaGallery'
import SimpleReactLightbox from 'simple-react-lightbox'

import { css } from '@emotion/react'

export default function PhotosPage() {
  return (
    <Layout>
      <h1 css={css`
        font-family: grenze;
        font-size: 2rem;
        color: #004b87;
        text-align: center;
        margin-top: 4rem;
        margin-bottom: 4rem;
      `}>Havamal Photos</h1>

      <SimpleReactLightbox>
        <MediaGallery />
      </SimpleReactLightbox>
    </Layout>
  )
}