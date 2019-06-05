import React from 'react'
import { StyledShoppingCart } from './StyledShoppingCart'

const ShoppingCart = () => {
  return (
    <StyledShoppingCart>
      <main>
        <section>
          <h2>cart</h2>
          <h3>checkout: $10</h3>
        </section>
        <section>
          <div>
            <img src="https://i.imgur.com/3iF33Tn.png"/>
          </div>
          <aside>
            <div>
              <button>-</button>
              <span>1</span>
              <button>+</button>
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