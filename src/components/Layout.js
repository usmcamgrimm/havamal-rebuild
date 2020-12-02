import React from 'react'
import Nav from '../components/Navbar'

export default function Layout({ children }) {
  return (
    <div className="m-0">
      <Nav />
      {children}
    </div>
  )
}