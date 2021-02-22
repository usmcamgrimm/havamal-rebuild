import React from 'react'
import Navbar from '../components/Navbar/Navbar'

export default function Layout({ children }) {
  return (
    <div className="m-0">
      <Navbar />
      {children}
    </div>
  )
}