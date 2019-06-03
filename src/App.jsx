import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import NavBar from './Components/Navbar'
import Home from './Components/Home/Home'
import Store from './Components/Store/Store'
import ShoppingCart from './Components/ShoppingCart/ShoppingCart'
import './global.css'

const App = () => {
  return (
      <BrowserRouter>
        <NavBar  />
        <Route path="/" exact component={Home} />
        <Route path="/store" component={Store}  />
        <Route path="/cart" component={ShoppingCart}  />
      </BrowserRouter>
  )
}

export default App