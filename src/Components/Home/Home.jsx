import React from 'react'
import { Link } from 'react-router-dom'
import { StyledHome } from './styledHome'

const Home = () => {
  return (
    <StyledHome>
      <div>
        <Link to="/store">
          <button>smell me</button>
        </Link>
      </div>
      <div>

      </div>
      <div>

      </div>
    </StyledHome>
  )
}

export default Home