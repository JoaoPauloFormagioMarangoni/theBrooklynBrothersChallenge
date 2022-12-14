import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        scroll-behavior: smooth;

      @media (max-width: 1080px) {
          font-size: 93.75%; // 15px
      }
      @media (max-width: 720px) {
          font-size: 87.5%; // 14px
      }
    }

    body, input, textarea, button {
        font-family: 'Source Sans Pro', sans-serif;
    }

    body {
        background-color: #747474;
    }
`
