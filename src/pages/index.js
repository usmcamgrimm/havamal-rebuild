import React from "react"

import Logo from "../components/Logo"
import SEO from "../components/seo"
import Nav from '../components/Navbar'

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <Nav />
    <div className="flex flex-col items-center justify-center h-screen">
      <Logo className="rounded-lg border" />
      <h1 className="text-4xl font-bold text-blue-lighter">Hail, Hordes of Havamal!</h1>
    </div>
  </>
)

export default IndexPage
