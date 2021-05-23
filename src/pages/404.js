import React from "react"

import SEO from "../components/seo"

export default function NotFoundPage() {
  return (
    <>
      <SEO title="404: Not Found" />
      <h1 className="font-roboto text-2xl text-blue-lighter mt-12 text-center">404: Not Found</h1>
      <p className="font-roboto text-xl text-white mt-14 text-center">You just hit a route that doesn&#39;t exist... the sadness.</p>
    </>
  )
}