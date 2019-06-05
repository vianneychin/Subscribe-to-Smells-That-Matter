import styled from 'styled-components'
export const StyledStore = styled.div`
  height: 100vh;
  > div {
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    > div:nth-child(1) {
        display: flex;
        align-items: center;
    }
    > aside {
        height: 40vh;
        display: flex;
        flex-direction: column;
        align-items: center;
      > section:nth-of-type(1) {
          display: flex;
          flex-direction: column;
          text-align: center;
          > button {
              margin: 1em;
              margin-bottom: 1.7em;
              font-size: 1.2em;
              font-weight: 200;
              line-height: 2em;
              border: none;
              color: white;
              background-color: black;
              box-shadow: 0 5px 10px rgba(154, 160, 185, 0.5), 0 15px 40px rgba(166, 173, 201, 0.2);
          }
      }
      > section:nth-of-type(1) {
        h3 {
          font-weight: 300;
        }
      }
      > section:nth-of-type(2) {
          > h4 {
            font-weight: 500;
            text-align: center;
            margin-bottom: 1em;
            font-size: 2em;
          }
          > div {
              width: 50vw;
              text-align: center;
          }
      }
    }
  }
  @media (max-width: 640px) {
    > div {
        flex-direction: column;
      > div:nth-child(1) {
          display: flex;
          justify-content: center;
          width: 100vw;
          height: 45%;
        img {
          height: 300px;
          width: 300px;
          align-self: flex-start;
        }
      }
      > aside {
        > section:nth-of-type(1) {
            width: 100%;
          > button {
              margin-top: .7em;
              margin-bottom: .7em;
          }
        }
        > section:nth-of-type(2) {
            padding: 1em;
          > h4 {
              font-size: 1.5em;
          }
          > div {
              width: 100%;
          }
        }
      }
    }
  }
`