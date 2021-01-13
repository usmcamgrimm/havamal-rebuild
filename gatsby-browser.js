import React from 'react'
import Layout from './src/components/Layout'

import 'fontsource-roboto'
import 'fontsource-pirata-one'
import 'fontsource-grenze'
import './src/styles/index.css'

export function wrapPageElement({ element, props }) {
  return (
    <Layout {...props}>
      {element}
    </Layout>
  )
}