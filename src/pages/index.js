import React from "react"
import { Link } from "gatsby"
import '../styles/style.less'

import Logo from "../components/logo"
import SEO from "../components/seo"

const HavamalHome = () => (
  <>
    <SEO title="Home" />
    <Logo />
    <h1>Hail, Hordes of Havamal!</h1>
  </>
)

export default HavamalHome
