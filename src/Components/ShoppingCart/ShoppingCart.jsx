import React from 'react'
import useShoppingCart from '../../hooks/useShoppingCart'
import { StyledShoppingCart } from './StyledShoppingCart'

const ShoppingCart = () => {
  const { addIncrementToCart, removeIncrementFromCart, emptyItemsInCart, total, quantity, emptyCart, yourCartIsEmpty } = useShoppingCart()
  return (
    <StyledShoppingCart>
      <div>
        {yourCartIsEmpty}
        Your shopping cart is empty.
      </div>
      <main style={{ display: emptyCart }}>
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
              <button onClick={removeIncrementFromCart}>
                -
              </button>
              <span>
                { quantity }
              </span>
              <button onClick={addIncrementToCart}>
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