import styled from 'styled-components'

export const Nav = styled.nav`
  white-space: nowrap;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  height: 10vh;
  align-items: center;
  background-color: black;
  color: white;
  font-size: 1.5em;
  text-align: center;
  h1 {
    position: relative;
    font-size: 20px;
    margin: auto;
  }
  a {
    margin: 20px;
  }
  a:hover {
    -webkit-transform: scale(1.3);
    -ms-transform: scale(1.3);
    transform: scale(1.3);
  }
  a:visited {
    color: white;
  }
  a:active {
    color: black;
  }
  @media (max-width: 640px) {
    width: 100%;
    flex-direction: column;
    justify-content: center;
    height: auto;
    h1 {
      display: none;
    }
  }
  @media (max-width: 1050px) {
    h1 {
      display: none;
    }
  }
`