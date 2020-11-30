import react from 'react'
import { graphql, useStaticQuery } from 'gatsby'

function JarfallaFlyer() {
    const image = useStaticQuery(graphql`
        query {
            flyerImage: file(relativePath: { eq: "flyers/jarfalla.jpg" }) {
                chhildImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)

    return (
        <img fluid={image.flyerImage.childImageSharp.fluid}></img>
    )
}

export default JarfallaFlyer