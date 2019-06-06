import React , { useState, useEffect } from 'react'
import { StyledShoppingCart } from './StyledShoppingCart'

const ShoppingCart = () => {
  const [total, setTotal] = useState(0)
  const [quantity, setQuantity] = useState(0)
  return (
    <StyledShoppingCart>
      <main>
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
              <button onClick={() => setTotal(total - 10)}>
                -
              </button>
              <span>1</span>
              <button onClick={() => setTotal(total + 10)}>
                +
              </button>
            </div>
            <div>
              <button>checkout</button>
              <button>remove</button>
            </div>
          </aside>
        </section>
      </main>

    </StyledShoppingCart>
  )
}

export default ShoppingCart