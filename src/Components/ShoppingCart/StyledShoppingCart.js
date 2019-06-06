import styled from 'styled-components'

export const StyledShoppingCart = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
  margin-top: 5em;
  main {
    > section:nth-of-type(1) {
        h2, p, h3 {
          text-align: center;
        }
        h2 {
          font-size: 3em;
        }
        h3 {
          font-weight: 500;
        }
      }
    > section:nth-of-type(2) {
      > aside {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          > div:nth-of-type(1) {
              display: inline-flex;
              align-items: center;
              justify-content: space-around;
              border: 1px solid black;
              line-height: 1.65em;
              width: 160px;
              height: 36px;
            > button, span {
                font-size: 1.5em;
                font-weight: 300;
            }
            > button {
                width: 30px;
                height: 30px;
                background-color: white;
                border: none;
                box-shadow: none;
            }
          }
          > div:nth-of-type(2) {
              width: 100%;
              display: flex;
              justify-content: space-evenly;
              padding-top: 4em;
            > button {
                width: 120px;
                height: 50px;
                border: 1px solid black;
                background-color: white;
                font-size: 1em;
                justify-content: space-around;
                border-radius: 4px;
            }
            > button:nth-of-type(2) {
                box-shadow: none;
                border: .5px solid grey;

            }
          }
        }
      }
    }
  }
  .disableBackground {
    position: absolute;
    top: 0%;
    left: 0%;
    background-color: rgb(0,0,0,.7);
    height: 100vh;
    width: 100vw;

  }
  @media(max-width: 640px) {
    main {
      width: 100%;
      height: 80vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      > section:nth-of-type(1) {
        margin-top: 2em;
        h2 {
          font-size: 2em;
        }
      }
      > section:nth-of-type(2) {
        > aside {
        > div:nth-of-type(1) {
          > img {
            height: 300px;
            width: 300px;
          }
        }
        > div:nth-of-type(2) {
          > button {
            margin-bottom: 2em;
          }
        }
      }
    }
  }
`