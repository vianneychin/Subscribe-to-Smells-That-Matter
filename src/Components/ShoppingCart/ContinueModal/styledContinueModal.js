import styled from 'styled-components'

export const StyledContinueModal = styled.div`
  position: absolute;
  margin-top: 15em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  width: 450px;
  height: 250px;
  padding: 1em;
  padding-bottom: 2em;
  border-radius: 4px;
  background-color: rgb(235, 235, 235);
  div {
    padding-top: 2.5em;
    display: flex;
    justify-content: space-evenly;
    button {
      width: 133px;
      height: 50px;
      font-size: 1.25em;
      border-radius: 4px;
      background-color: black;
      color: white;
    }
  }
`