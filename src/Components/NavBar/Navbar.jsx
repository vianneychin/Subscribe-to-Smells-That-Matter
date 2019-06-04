import React from 'react'
import { NavLink } from 'react-router-dom'
import { Nav } from './styledNavBar'

const NavBar = () => {
  return (
    <Nav>
      <NavLink>About</NavLink>
      <NavLink activeStyle={{color: 'grey'}}>
        Sign in
      </NavLink>
      <NavLink activeStyle={{color: 'grey'}}>
        Register
      </NavLink>
      <h1>
        the only subscription you'll ever need.
      </h1>
      <NavLink activeStyle={{color: 'black'}} to="/cart">
        Cart
      </NavLink>
      <NavLink activeStyle={{color: 'black'}} to="/store">
        Shop
      </NavLink>
    </Nav>
  )
}

export default NavBar