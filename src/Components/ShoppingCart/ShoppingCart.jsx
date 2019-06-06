import React , { useState } from 'react'
import { StyledShoppingCart } from './StyledShoppingCart'

const ShoppingCart = () => {
  const [total, setTotal] = useState(0)
  const [quantity, setQuantity] = useState(0)
  const [emptyCart, setEmptyCart] = useState('flex')
  const [yourCartIsEmpty, setYourCartIsEmpty] = useState('')

  const addToCart = () => {
    setTotal(total + 10)
    setQuantity(quantity + 1)
  }
  const removeFromCart = () => {
    if (quantity !== 0) {
      setTotal(total - 10)
      setQuantity(quantity - 1)
    }
  }
  const emptyItemsInCart = () => {
    /* Changes the StyledShoppingCart display to none */
    setEmptyCart('none')
  }

  return (
    <StyledShoppingCart>
      <main >
        <section>
          <h2>🛒</h2>
          <h3>checkout: ${ total }</h3>
          <p>A really nice candle.</p>
        </section>
        <section>
          <div>
            <img src="https://i.imgur.com/3iF33Tn.png"/>
          </div>
          <aside>
            <div>
              <button onClick={removeFromCart}>
                -
              </button>
              <span>
                { quantity }
              </span>
              <button onClick={addToCart}>
                +
              </button>
            </div>
            <div>
              <button>checkout</button>
              <button onClick={emptyItemsInCart}>remove</button>
            </div>
          </aside>
        </section>
      </main>

    </StyledShoppingCart>
  )
}

export default ShoppingCart