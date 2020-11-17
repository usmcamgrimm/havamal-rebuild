import React from "react"

import Logo from "../components/Logo"
import SEO from "../components/seo"

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <div className="container px-4 mx-auto">
      <Logo />
      <h1 class="text-4xl font-bold text-blue-lighter">Hail, Hordes of Havamal!</h1>
    </div>
  </>
)

export default IndexPage
