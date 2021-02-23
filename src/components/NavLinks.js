import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const NavContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  line-height: 0.75;
`;
const NavLink = styled(Link)`
  color: #ffcd00;
  font-family: grenze;
  font-size: 1.25rem;
  text-decoration: none;
  display: flex;
  padding: 8px 1.25rem;
  :hover {
    color: #ffffff;
  }
  @media screen and (max-width: 768px) {
    padding: 1rem 0;
    font-size: 1.5rem;
    z-index: 3;
  }
`;

export default function NavLinks() {
  return(
    <>
      <NavContainer className="lg:from-transparent lg:via-blue lg:to-transparent lg:bg-gradient-to-r lg:p-1">
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