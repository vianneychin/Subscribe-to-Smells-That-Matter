import React, { useState, useEffect } from 'react'
import { NavLink, Redirect } from 'react-router-dom'
import { Nav } from './styledNavBar'


const NavBar = ({ logged }) => {
  const [display, setDisplay]             = useState('')
  const [logoutDisplay, setLogoutDisplay] = useState('none')
  const [logout, setLogout] = useState(false)


  useEffect( () => {
    if (logged) {
      setDisplay('none')
      setLogoutDisplay('')
    }
    else if (logout) {
      localStorage.clear()
    }
  }, [logged] )
  const handleLogout = () => {
    localStorage.clear()
    window.location.reload()
  }

  // else {
  //   setDisplay('')
  //   setLogoutDisplay('none')
  // }
  
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
      <a onClick={() => handleLogout()} style={{ display: logoutDisplay }}>
        Logout
      </a>
    </Nav>
  )
}

export default NavBar