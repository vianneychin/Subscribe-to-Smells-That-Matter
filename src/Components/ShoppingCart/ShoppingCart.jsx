import React from 'react'
import { StyledShoppingCart } from './StyledShoppingCart'

/* Props passed down from the App.jsx */
const ShoppingCart = (props) => {
  return (
    <StyledShoppingCart>
      <div>
        {props.yourCartIsEmpty}
      </div>
      <main style={{ display: props.emptyCart }}>
        <section>
          <h2>🛒</h2>
          <h3>checkout: ${ props.total }</h3>
          <p>A really nice candle.</p>
        </section>
        <section>
          <div>
            <img src="https://i.imgur.com/3iF33Tn.png"/>
          </div>
          <aside>
            <div>
              <button onClick={props.removeIncrementFromCart}>
                -
              </button>
              <span>
                { props.quantity }
              </span>
              <button onClick={props.addIncrementToCart}>
                +
              </button>
            </div>
            <div>
              <button>checkout</button>
              <button onClick={props.emptyItemsInCart}>remove</button>
            </div>
          </aside>
        </section>
      </main>
    </StyledShoppingCart>
  )
}

export default ShoppingCart