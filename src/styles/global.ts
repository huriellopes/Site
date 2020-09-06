import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    text-decoration: none;
    list-style: none;
    box-sizing: border-box;
  }

  :root {
    --color-primary: #6954EA;
    --color-secondary: #11141E;
    --color-white: #FEFEFF;
  }

  body {
    font-family: 'Roboto Slab', sans-serif;
    font-size: 16px;
    font-weight: 400;
    background: var(--color-primary);
    -webkit-font-smoothing: antialiased;
    display: flex;
    flex-direction: column;
  }

  footer {
    margin-top: auto;
  }

  button {
    cursor: pointer;
  }
`
