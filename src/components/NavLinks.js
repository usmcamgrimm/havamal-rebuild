import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const NavContainer = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: row;
`;
const NavLink = styled(Link)`
  color: #ffcd00;
  text-decoration: none;
  display: flex;
  justify-content: space-evenly;
`;

export default function NavLinks() {
  return(
    <>
      <NavContainer>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/music">Music</NavLink>
        <NavLink to="/videos">Videos</NavLink>
        <NavLink to="/media">Media</NavLink>
        <NavLink to="/saga">Saga</NavLink>
        <NavLink to="/raids">Raids</NavLink>
        <NavLink to="/news">News</NavLink>
        <NavLink to="/resources">Resources</NavLink>
      </NavContainer>
    </>
  )
}