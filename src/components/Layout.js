import React from 'react'
// import Nav from '../components/Navbar'
import NavbarV2 from '../components/NavbarV2'

export default function Layout({ children }) {
  return (
    <div className="m-0">
      <NavbarV2 />
      {children}
    </div>
  )
}