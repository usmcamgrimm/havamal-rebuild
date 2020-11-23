import React from 'react'
import {useStaticQuery, graphql} from 'gatsby'

const BandGallery = () => {
    const photos = useStaticQuery(graphql`query CloudinaryImage {
        allCloudinaryMedia {
            edges {
                node {
                    secure_url
                }
            }
        }
    }`)

    const BandImages = photos.allCloudinaryMedia.edges
    return (
        <div>
            <div>
                {BandImages.map((image, index) => (
                    <div key={`${index}-cl`}>
                        <img src={image.node.secure_url} alt={"no alt :("} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default BandGallery