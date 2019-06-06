import { useState } from 'react'

const useShoppingCart = () => {
  const [total, setTotal] = useState(0)
  const [quantity, setQuantity] = useState(0)
  const [emptyCart, setEmptyCart] = useState('none')
  const [yourCartIsEmpty, setYourCartIsEmpty] = useState('Your cart is empty.')

  const addIncrementToCart = () => {
    setTotal(total + 10)
    setQuantity(quantity + 1)
  }
  const removeIncrementFromCart = () => {
    if (quantity !== 0) {
      setTotal(total - 10)
      setQuantity(quantity - 1)
    }
  }
  const emptyItemsInCart = () => {
    setEmptyCart('none')
    setYourCartIsEmpty('Your shopping cart is empty.')
  }
  const addItemToCart = () => {
    setEmptyCart('')
    setYourCartIsEmpty('')
  }
  return {
    total, setTotal,
    quantity, setQuantity,
    emptyCart, setEmptyCart,
    yourCartIsEmpty, setYourCartIsEmpty,
    addIncrementToCart,
    removeIncrementFromCart,
    emptyItemsInCart,
    addItemToCart
  }
}

export default useShoppingCart