import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import { SRLWrapper } from  'simple-react-lightbox'

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
    transform: scale(2);
  }
`;

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
    <SRLWrapper>
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