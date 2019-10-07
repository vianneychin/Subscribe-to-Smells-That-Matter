import React from 'react'
import { Link } from 'react-router-dom'
import { StyledStore } from './styledStore'

const Store = props => {
  return (
    <StyledStore>
      <div>
        <div>
          <img alt='candle-img' src='https://i.imgur.com/AkCVvld.png' />
        </div>
        <aside>
          <section>
            <h4>A Really Nice Candle</h4>
            <h3>
              Notes:
              <span>&nbsp;Oak, Smoke, and Toast</span>
            </h3>
            <Link to='/cart' onClick={props.addItemToCart}>
              <button>Add to cart</button>
            </Link>
          </section>
          <section>
            <h4>$10</h4>
            <div>
              Using wick and wax to create a simple, somewhat affordable, and a
              sensational experience for your nose and your friend's nose.
              Subscribe today with the only smelly subscription service you'll
              ever need.
            </div>
          </section>
        </aside>
      </div>
    </StyledStore>
  )
}

export default Store
