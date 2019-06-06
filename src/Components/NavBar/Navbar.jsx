import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { Nav } from './styledNavBar'


const NavBar = ({ logged }) => {
  const [display, setDisplay] = useState('')

  useEffect( () => logged ? setDisplay('none') : setDisplay(''), [logged])

  return (
    <Nav>
      <NavLink to="/register" style={{ display: display }} activeStyle={{ color: 'grey' }}>
        Register
      </NavLink>
      <NavLink to="/about" activeStyle={{ color: 'grey' }}>
        About
      </NavLink>
      <NavLink exact to="/" activeStyle={{ color: 'grey' }}>
        Home
      </NavLink>
      <h1>
        the only subscription you'll ever need.
      </h1>
      <NavLink to="/login" style={{ display: display }} activeStyle={{ color: 'grey' }}>
        Login
      </NavLink>
      <NavLink to="/cart" activeStyle={{ color: 'grey' }}>
        Cart
      </NavLink>
      <NavLink to="/store" activeStyle={{ color: 'grey' }}>
        Shop
      </NavLink>
    </Nav>
  )
}

export default NavBar