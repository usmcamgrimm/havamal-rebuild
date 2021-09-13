import React, { useState } from 'react'
import { FaRegArrowAltCircleUp } from 'react-icons/fa'

import { css } from '@emotion/react'
import styled from '@emotion/styled'

const ScrollButton = styled.div`
  position: fixed;
  margin: 0 auto;
  right: 30px;
  bottom: 40px;
  height: 60px;
  font-size: 2.25rem;
  z-index: 10;
  color: #66add9;
  font-weight: normal;
  &:hover {
    color: #ffffff;
  }
  @media screen and (max-width: 500px) {
    display: none;
  }
`;

export default function ScrollArrow() {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const setScroll = document.documentElement.scrollTop;
    if (setScroll > 150) {
      setVisible(true)
    } else if (setScroll <= 150){
      setVisible(false)
    }
  }

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  window.addEventListener('scroll', toggleVisible);

  return (
    <ScrollButton>
      <FaRegArrowAltCircleUp
        onClick={scrollTop}
        style={{ display: visible ? 'inline' : 'none' }}
      />
    </ScrollButton>
  )
}