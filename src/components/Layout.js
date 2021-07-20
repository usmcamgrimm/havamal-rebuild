import React from 'react'
import { css } from '@emotion/react'


export default function Layout({ children }) {
  return (
    <div 
      css={css`
        background-color: #070707;
      `}
    >
      {children}
    </div>
  )
}
