import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import NavBar from './Components/NavBar/Navbar'
import Home from './Components/Home/Home'
import About from './About/About'
import Register from './Components/Register/Register'
import SignIn from './Components/SignIn/SignIn'
import Store from './Components/Store/Store'
import ShoppingCart from './Components/ShoppingCart/ShoppingCart'
import './global.css'

const App = () => {
  return (
      <BrowserRouter>
        <NavBar  />
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={SignIn} />
        <Route path="/store" component={Store}  />
        <Route path="/cart" component={ShoppingCart}  />
      </BrowserRouter>
  )
}

export default App