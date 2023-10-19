import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 62.5%;
    scroll-behavior: smooth;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body {
    font-family: ${({ theme }) => theme.fonts.poppins};
    font-size: 1.6rem;
    line-height: 1.5;
  }

  h1,
  h2,
  h3 {
    font-family: ${({ theme }) => theme.fonts.lato};
    margin: 0 0 1.5rem 0;
    letter-spacing: .2rem;
    text-transform: uppercase;
  }

  h1 {
    font-size: 3.5rem;
    font-weight: 900;
  }

  h2 {
    font-size: 2.8rem;
    text-align: center;
  }

  h3 {
    font-size: 2rem;
  }

  p {
    margin: 0;
    letter-spacing: .1rem;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }

  hr {
    border: 1px solid ${({ theme }) => theme.colors.grayLight};
  }

  button:hover {
    cursor: pointer;
  }

  /* Utils */
  .container {
    width: min(90%, 105rem);
    margin: 0 auto;
  }

  .section {
    padding: 5rem 0;
  }

  .section-description {
    text-align: center;
    margin-bottom: 5rem;
  }

  .error {
    color: ${({ theme }) => theme.colors.error};
  }
`;