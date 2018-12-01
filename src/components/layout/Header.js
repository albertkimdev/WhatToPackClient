import React from 'react'
import { Link } from 'gatsby'

import styled from 'styled-components'

const Wrapper = styled.div`
  border: 1px solid black;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: blue;
  color: white;
`

const Header = () => (
  <Wrapper>
    <div className="logo">
      <p>logo</p>
    </div>
    <div className="menu">
      <p>menu</p>
    </div>
    <div className="user-buttons">
      <p>ustbuttons</p>
    </div>
  </Wrapper>
)

export default Header
