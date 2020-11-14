import React from "react"
import '../styles/style.less'
import Container from "../components/container/container"

import Logo from "../components/logo/logo"
import SEO from "../components/seo"

const HavamalHome = () => (
  <>
    <SEO title="Home" />
    <Container>
      <Logo />
      <h1>Hail, Hordes of Havamal!</h1>
    </Container>
  </>
)

export default HavamalHome
