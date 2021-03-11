import React, { useState } from 'react'
import styled from 'styled-components'
import NavLinks from './NavLinks'
import AxeIcon from './AxeIcon'

const NavBar = styled.nav`
  display: flex;
  height: 2.5rem;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  z-index: 2;
  @media screen and (max-width: 768px) {
    position: sticky;
    height: 4rem;
    top: 0;
    right: 0;
    bottom: 0;
    left;
  }
`;

const NavToggle = styled.div`
  display: none;
  height: 100%;
  padding: 0 3rem;
  @media screen and (max-width:768px) {
    display: flex;
    align-items: center;
  }
`;

const NavLinksContainer = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    position: fixed;
    width: 100%;
    justify-content: flex-start;
    padding-top: 10vh;
    background-color: #002f54;
    transition: all 0.3s ease-in;
    top: 8vh;
    left: ${props => (props.open ? "-100%" : "0")};
  }
`;
const AxeMenu = styled.div`
  align-self: center;
  position: relative;
`;

export default function NavbarV2() {
  const [navExpand, setNavExpand] = useState(false)
  return(
    <NavBar className="lg:from-transparent lg:via-blue lg:to-transparent lg:bg-gradient-to-r lg:p-1">
      <NavToggle
        navExpand={navExpand}
        onClick={() => setNavExpand(!navExpand)}
      >
        <AxeIcon />
        {navExpand ? <AxeMenu open /> : <AxeMenu />}
      </NavToggle>
      {navExpand ? (
        <NavLinksContainer
          onClick={() => setNavExpand(!navExpand)}
        >
          <NavLinks />
        </NavLinksContainer>
      ) : (
          <NavLinksContainer open>
            <NavLinks />
          </NavLinksContainer>
      )}
    </NavBar>
  )
}