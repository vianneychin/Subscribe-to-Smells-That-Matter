import React from 'react'
import styled from 'styled-components'

const StyledAbout = styled.div`
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    font-size: 13.5px;
  }
`

const About = () => {
  return (
    <StyledAbout>
      <p>
        We about candles.
      </p>
    </StyledAbout>
  )
}

export default About