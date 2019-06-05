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
          padding: 0.6em 1.7em;
          border: none;
          border-radius: 4px;
          box-shadow: 0 5px 10px rgba(154, 160, 185, 0.5), 0 15px 40px rgba(166, 173, 201, 0.2);
          background-color: rgb(0, 0, 0, .8);
          color: white;
      }
    }
  }
  @media (max-width: 640px) {

  }
`