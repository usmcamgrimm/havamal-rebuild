import React, { useState } from 'react'
import styled from 'styled-components'
import NavLinks from './NavLinks'

const AxeMenu = styled.div``;

export default function NavbarV2() {
  const [navExpand, setNavExpand] = useState(false)
  return(
    <nav>
      <div
        navExpand={navExpand}
        onClick={() => setNavExpand(!navExpand)}
      >
        {navExpand ? <AxeMenu open /> : <AxeMenu />}
      </div>
      {navExpand ? (
        <div>
          <NavLinks />
        </div>
      ) : (
        <div open>
          <NavLinks />
        </div>
      )}
    </nav>
  )
}