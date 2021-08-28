import React from 'react'
import Layout from '../components/Layout'
import MediaGallery from '../components/MediaGallery'
import SimpleReactLightbox from 'simple-react-lightbox'

import { css } from '@emotion/react'

export default function PhotosPage() {
  return (
    <Layout>
      <h1 css={css`
        font-family: Norse;
        font-size: 3rem;
        font-weight: normal;
        color: #66add9;
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