import { createGlobalStyle } from 'styled-components';
import fonts from '@/styles/font.module.css';

export const GlobalStyles = createGlobalStyle`
  ${fonts}

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: unset;
    padding: unset;
  }

  :root {
    font-size: 16px;
  }

  body {
    font-family: ${(p) => p.theme.fonts.raleway};
    font-size: 1rem;
    line-height: 1.5;
    min-height: 100vh;
    color: ${(p) => p.theme.colors.text};
    background-color: ${(p) => p.theme.colors.background};
    -webkit-font-smoothing: antialiased;
  }

  img,
  picture,
  canvas,
  svg {
    display: block;
    inline-size: 100%;
    block-size: auto;
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  button {
    border: none;
    background-color: transparent;
    cursor: pointer;
  }

  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    overflow-wrap: break-word;
  }

  ul,
  ol {
    list-style: none;
  }

  li {
    list-style-type: none;
  }
`;
