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

/* HOOK */
import useShoppingCart from './hooks/useShoppingCart'
import useLoginForm from './hooks/useLoginForm'



const App = () => {
  const { addIncrementToCart, removeIncrementFromCart, emptyItemsInCart, total, quantity, emptyCart, yourCartIsEmpty, addItemToCart } = useShoppingCart()
  const { logged } = useLoginForm()
  console.log(logged, '<---- logged App.jsx')
  return (
      <BrowserRouter>
        <NavBar logged={logged}  />
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
          render={
            () => <Store
                    addItemToCart={addItemToCart}
                  />
          }
        />
        <Route
          path="/cart"
          render={
            () => <ShoppingCart
                    addIncrementToCart={addIncrementToCart}
                    removeIncrementFromCart={removeIncrementFromCart}
                    emptyItemsInCart={emptyItemsInCart}
                    total={total}
                    quantity={quantity}
                    emptyCart={emptyCart}
                    yourCartIsEmpty={yourCartIsEmpty}
                  />
            }
        />
      </BrowserRouter>
  )
}

export default App