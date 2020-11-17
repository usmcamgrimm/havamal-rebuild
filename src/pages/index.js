import React from "react"

import Logo from "../components/Logo"
import SEO from "../components/seo"

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <Logo />
    <h1 class="text-4xl font-bold text-blue-lighter">Hail, Hordes of Havamal!</h1>
  </>
)

export default IndexPage
