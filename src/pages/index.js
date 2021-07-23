import * as React from "react"
import Layout from "../components/Layout"
import Navbar from '../components/Navbar/Navbar'

import styled from '@emotion/styled'

const Welcome = styled.h1`
  font-family: "pirata one";
  font-size: 2.25rem;
  font-weight: normal;
  text-align: center;
  color: #66add9;
  @media screen and (min-width: 1025px) {
    text-size: 3rem;
  }
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export default function Index() {
 return (
   <Layout>
     <Navbar />
     <Container>
      <Welcome>
        Hail, Hordes of Havamal!
      </Welcome>
     </Container>
   </Layout> 
  )
}