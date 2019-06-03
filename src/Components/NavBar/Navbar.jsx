import React from 'react'
import { Link } from 'react-router-dom'
import { Nav } from './NavBarStyles'

const NavBar = () => {
  return (
    <Nav>
      <Link>About</Link>
      <Link>Sign in</Link>
      <Link>Register</Link>
      <Link to="/cart">Cart</Link>
      <Link to="/store">Shop</Link>
    </Nav>
  )
}

export default NavBar