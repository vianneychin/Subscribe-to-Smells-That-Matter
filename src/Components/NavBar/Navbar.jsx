import React, { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Nav } from './styledNavBar'


const NavBar = ({ logged }) => {
  const [display, setDisplay]             = useState('')
  const [logoutDisplay, setLogoutDisplay] = useState('none')

  useEffect(() => logged ? setDisplay('none')   : setDisplay(''), [logged])



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
      <a style={{ display: logoutDisplay }}>
        Logout
      </a>
    </Nav>
  )
}

export default NavBar