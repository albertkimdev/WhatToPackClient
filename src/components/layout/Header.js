import React from 'react'
import { Link } from 'gatsby'

import styled from 'styled-components'

import Logo from '../../assets/logo.svg'

const Wrapper = styled.div`
  display: flex;
  svg {
    top: 1rem;
    position: fixed;
    width: 50px;
    height: 50px;
    left: 1rem;
  }
`

const Header = () => (
  <Wrapper>
    <div className="logo">
      <Logo />
    </div>
    {/* <div className="menu">
      <p>menu</p>
    </div>
    <div className="user-buttons">
      <p>ustbuttons</p>
    </div> */}
  </Wrapper>
)

export default Header
