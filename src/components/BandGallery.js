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
            <div className="flex lg:flex-nowrap flex-wrap justify-center items-center space-x-2">
                {BandImages.map((image, index) => (
                    <div key={`${index}-cl`}>
                        <img src={image.node.secure_url} className="m-0 band-image rounded" alt={"no alt :("} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default BandGallery