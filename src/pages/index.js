import React from "react"

import Logo from "../components/Logo"
import SEO from "../components/seo"

export default function IndexPage() {
  return (
    <>
      <SEO title="Home" />
      <div className="flex flex-col items-center justify-center h-screen">
        <Logo className="rounded-lg border" />
        <h1 className="text-4xl font-bold text-blue-lighter">Hail, Hordes of Havamal!</h1>
      </div>
    </>
  )
}
