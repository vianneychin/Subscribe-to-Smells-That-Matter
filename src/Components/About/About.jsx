import React from 'react'
import styled from 'styled-components'

const StyledAbout = styled.div`
  height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p {
    font-size: 13.5px;
  }
`

const About = () => {
  return (
    <StyledAbout>
      <p>We have one candle.</p>
      <br />
      <br />
      <br />
      <br />
      <p>The candle is from Baxter of California.</p>
    </StyledAbout>
  )
}

export default About
