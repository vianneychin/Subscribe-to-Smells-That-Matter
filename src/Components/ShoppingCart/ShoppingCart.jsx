import React from 'react'
import { StyledShoppingCart } from './StyledShoppingCart'
import ContinueModal from './ContinueModal/ContinueModal'

import UseModal from '../../hooks/useModal'

const ShoppingCart = ({
  emptyCart, total, removeIncrementFromCart, quantity, addIncrementToCart, emptyItemsInCart, yourCartIsEmpty
}) => {
  const { toggle, setToggle, toggleModal } = UseModal()
  return (
    <StyledShoppingCart>
      <div>
        { yourCartIsEmpty }
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
              <button onClick={ removeIncrementFromCart }>
                -
              </button>
              <span>
                { quantity }
              </span>
              <button onClick={ addIncrementToCart }>
                +
              </button>
            </div>
            <div>
              <button onClick={setToggle}>
                continue
              </button>
              <button onClick={emptyItemsInCart}>remove</button>
            </div>
          </aside>
        </section>
      </main>
      {
        toggle
        ? <div className="disableBackground" />
        : <div />
      }
      {
        toggle
        ? <ContinueModal setToggle={setToggle}/>
        : <div />
      }
    </StyledShoppingCart>
  )
}

export default ShoppingCart