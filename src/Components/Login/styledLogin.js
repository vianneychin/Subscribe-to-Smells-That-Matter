import styled from 'styled-components'
export const StyledLogin = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10em;
  > div {
    width: 700px;
    > div {
      width: 700px;
      > h3 {
        font-weight: 300;
        a,
        a:visited {
          color: green;
        }
      }
      > h1,
      h3 {
        align-self: flex-start;
      }
    }
  }
  > form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 700px;
    > input {
      width: 700px;
      font-size: 15px;
      line-height: 3;
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      border: 0.5px solid #bdbdbd;
      padding: 10px 11px 11px 11px;
      box-shadow: none;
      outline: none;
    }
    > label {
      align-self: flex-start;
      padding-bottom: 5px;
      padding-top: 20px;
      color: rgb(100, 100, 100);
    }
    > button {
      width: 250px;
      line-height: 50px;
      border-radius: 25px;
      margin-top: 5em;
      background-color: black;
      color: #fff;
      border: none;
      font-size: 20px;
    }
    > p {
      margin-top: 1.5em;
      color: red;
    }
  }
  @media (max-width: 640px) {
    display: block;
    padding-top: 5em;
    height: 100vh;
    > div {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      width: 100%;
      > div {
        width: 100%;
        padding-top: 1em;
        padding-bottom: 5em;
        padding-left: 1em;
      }
    }
    > form {
      width: 100%;
      > label {
        display: none;
      }
      > input {
        width: 90%;
        max-width: 400px;
      }
      > input:nth-of-type(1) {
        margin-bottom: 3em;
      }
    }
  }
`
