import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
   *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    button{
        cursor: pointer;
        border: none;
        background: transparent;
    }

    ul, ol, li{
        list-style: none;
    }

    img{
        max-width: 100%;
    }

    input, select{
        background: transparent;
        border: none;
    } 

    body {
        width: 100vw;
        height: 100vh;

    background-color: var(--color-grey4);
  }

    h1, h2, h3, h4, h5, h6, p, span, li{
        font-family: 'Inter', sans-serif;
    }

    :root{
        --color-primary: #FF577F;
        --color-primary-focus: #FF427F;
        --color-primary-negative: #59323F;
        --color-grey0: #F8F9FA;
        --color-grey1: #868E96;
        --color-grey2: #343B41;
        --color-grey3: #212529;
        --color-grey4: #121214;
        --color-white: #fff;
        --color-sucess: #3FE864;
        --color-error: #E83F5B;
    }



`;
