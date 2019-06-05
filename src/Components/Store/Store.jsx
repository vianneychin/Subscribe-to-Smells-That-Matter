import React from 'react'
import { StyledStore } from './styledStore'

const Store = () => {
  return (
    <StyledStore>
      <div>
        <div>
          <img src="https://i.imgur.com/AkCVvld.png"/>
        </div>

        <aside>

          <section>
            <h4>A Really Nice Candle</h4>
            <h3>Notes: Oak, Smoke, and Toast</h3>
            <button>Add to cart</button>
          </section>

          <section>
            <h4>$10</h4>
            <div>
                Using wick and wax to create a simple, somewhat affordable, and a sensational experience for your nose and your friend's nose. Subscribe today with the only smelly subscription service you'll ever need.
            </div>
          </section>

        </aside>
      </div>
    </StyledStore>
  )
}


export default Store