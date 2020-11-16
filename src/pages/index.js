import React from "react"

import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <h1>Hail, Hordes of Havamal!</h1>
  </>
)

export default IndexPage
