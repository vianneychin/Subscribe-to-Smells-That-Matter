import styled from 'styled-components'

export const StyledHome = styled.div`
  div:nth-of-type(1) {
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url("https://i.imgur.com/m6vQblW.jpg");
    background-size: cover;
    background-position: center;
    height: 100vh;
    > a {
      > button {
        font-size: 2.2em;
        padding: 0.6em 1em;
        border: none;
        border-radius: 4px;
        box-shadow: 0 2px 5px rgba(0, 0, 0, .2);
        background: linear-gradient(
          rgb(0, 0, 0, .7), rgb(255,255,255,.7)
        );
        color: white;
      }
    }
  }
  @media (max-width: 640px) {

  }
`