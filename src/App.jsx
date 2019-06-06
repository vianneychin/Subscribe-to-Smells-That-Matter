import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import NavBar from './Components/NavBar/Navbar'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Register from './Components/Register/Register'
import Login from './Components/Login/Login'
import Store from './Components/Store/Store'
import ShoppingCart from './Components/ShoppingCart/ShoppingCart'
import './global.css'
import useShoppingCart from './hooks/useShoppingCart'

const App = () => {
  return (
      <BrowserRouter>
        <NavBar  />
        <Route
          path="/"
          exact render={ () => <Home /> }
        />
        <Route
          path="/about"
          render={ () => <About /> }
        />
        <Route
          path="/register"
          render={ () => <Register />}
        />
        <Route
          path="/login"
          render={() => <Login/>}
        />
        <Route
          path="/store"
          render={() => <Store />}
        />
        <Route
          path="/cart"
          render={() => <ShoppingCart/>}
        />
      </BrowserRouter>
  )
}

export default App