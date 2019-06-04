import React from 'react'
import { NavLink } from 'react-router-dom'
import { Nav } from './styledNavBar'

const NavBar = () => {
  return (
    <Nav>
      <NavLink exact to="/" activeStyle={{color: 'grey'}}>Home</NavLink>
      <NavLink activeStyle={{color: 'grey'}}>About</NavLink>
      <NavLink activeStyle={{color: 'grey'}}>
        Register
      </NavLink>
      <h1>
        the only subscription you'll ever need.
      </h1>
      <NavLink activeStyle={{color: 'grey'}}>
        Sign in
      </NavLink>
      <NavLink to="/cart" activeStyle={{color: 'grey'}}>
        Cart
      </NavLink>
      <NavLink to="/store" activeStyle={{color: 'grey'}}>
        Shop
      </NavLink>
    </Nav>
  )
}

export default NavBar