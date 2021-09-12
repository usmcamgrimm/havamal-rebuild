import React from 'react'
import '../styles/layout.css'
import Navbar from './Navbar/Navbar'
import ScrollArrow from './ScrollArrow'

import { css } from '@emotion/react'

export default function Layout({ children }) {
  return (
    <div 
      css={css`
        background-color: #070707;
        min-height: 100vh;
      `}
    >
      <Navbar />
      {children}
      <ScrollArrow />
    </div>
  )
}
