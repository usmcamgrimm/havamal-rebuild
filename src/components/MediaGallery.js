import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { SRLWrapper } from 'simple-react-lightbox'

import styled from '@emotion/styled'

const MediaGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 8px;
  padding: 2rem 4rem;
`;

const PhotoStyle = styled.div`
  img {
    width: 100%;
    height: 200px;
    object-fit: contain;
    display: grid;
    align-items: center;
  }
  padding: 6px;
  img:hover {
    transform: scale(1.4);
    cursor: crosshair;
  }
`;

const options = {
  settings: {
    overlayColor: 'rgba(14, 24, 31, 0.8)',
    boxShadow: '2px 4px 12px #000000',
  },
  buttons: {
    backgroundColor: 'rgba(14, 24, 31, 0.8)',
    iconColor: '#66add9',
    size: '42px',
  },
  caption: {
    showCaption: false,
  },
  progressBar: {
    backgroundColor: '#004b87',
    fillColor: '#ffcd00',
    height: '2px',
  }
}

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
    <SRLWrapper options={options}>
      <MediaGrid>
        {HavamalImages.map((image, index) => (
          <PhotoStyle key={`${index}-image`}>
            <img src={image.node.secure_url} alt="Havamal photos" />
          </PhotoStyle>
        ))}
      </MediaGrid>
    </SRLWrapper>
  )
}