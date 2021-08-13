import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import { css } from '@emotion/react'

export default function NavLinks() {
  return(
    <>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/music">Music</NavLink>
      <a href="../music#videoList"
        css={css`
          color: #ffcd00;
          font-family: grenze;
          font-size: 1.25rem;
          text-decoration: none;
          padding: 8px 1.25rem;
          :hover {
            color: #ffffff;
          }
          @media screen and (max-width: 768px) {
            padding: 12px 0;
            font-size: 1.75rem;
            z-index: 5;
          }
        `}
      >
        Videos
      </a>
      <NavLink to="/photos">Photos</NavLink>
      <NavLink to="/saga">Saga</NavLink>
      <a href="../#raids"
        css={css`
          color: #ffcd00;
          font-family: grenze;
          font-size: 1.25rem;
          text-decoration: none;
          padding: 8px 1.25rem;
          :hover {
            color: #ffffff;
          }
          @media screen and (max-width: 768px) {
            padding: 12px 0;
            font-size: 1.75rem;
            z-index: 5;
          }
        `}
      >
        Raids
      </a>
      <NavLink to="/news">News</NavLink>
      <NavLink to="/resources">Resources</NavLink>
    </>
  )
}

const NavLink = styled(Link)`
  color: #ffcd00;
  font-family: grenze;
  font-size: 1.25rem;
  text-decoration: none;
  padding: 8px 1.25rem;
  :hover {
    color: #ffffff;
  }
  @media screen and (max-width: 768px) {
    padding: 12px 0;
    font-size: 1.75rem;
    z-index: 5;
  }
`;