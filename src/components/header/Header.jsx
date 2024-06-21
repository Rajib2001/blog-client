import styled from '@emotion/styled'
import { AppBar, Toolbar } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Component=styled(AppBar)`
    background-color: #ffffff;
    color: #000;
`
const Container=styled(Toolbar)`
justify-content: center;

& >a{
    padding: 20px;
    color: inherit;
    text-decoration: none;
}


`




const Header = () => {
  return (
    <div>
      <Component>
        <Container>
            <Link to="/">HOME</Link>
            <Link to="/about">ABOUT</Link>
            <Link to="/contact">CONTACT</Link>
            <Link to="/login">LOGOUT</Link>
        </Container>
      </Component>
    </div>
  )
}

export default Header
