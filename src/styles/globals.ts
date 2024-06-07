'use client'

import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #F9F9F9;
    --blue: #0F52BA;
    --text-dark-gray: #2C2C2C;
    --backgrounddark-gray: #373737;
    --border: #BFBFBF;
    --footer: #EEEEEE;
  }

    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Montserrat", sans-serif;
  }

  body {
    background-color: var(--background);
  }
`
