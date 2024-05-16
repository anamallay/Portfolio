import { createGlobalStyle } from "styled-components";
import { colors } from "../../utils/var";

const GlobalStyle = createGlobalStyle`
  *, *::after, *::before {
    box-sizing: border-box;
  }

  * {
    margin: 0;
    padding: 0;
    line-height: calc(1em + 0.5rem);
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: 'General Sans', sans-serif;
    background-color: ${colors("dark")}; 
    color: ${colors("light")}; // Use theme for text color
  }

  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
    user-select: none;
  }

  input, button, textarea, select {
    font: inherit;
  }

  button {
    display: inline-block;
    border: none;
    background: none;
    cursor: pointer;
    color: inherit;
    font-family: inherit !important;
  }

  a {
    color: ${colors("rose")} 
  }

  strong {
    color: ${colors("teal")}; 
  }
  /* Scrollbar */
  body::-webkit-scrollbar {
  width: 10px;
  border-radius: 10px;
}
 
body::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(225, 29, 72, 0.3);
}
 
body::-webkit-scrollbar-thumb {
   /* background-image: linear-gradient(180deg, #e11d48 0%, #0d9488 99%); */
  background-color: rgba(13, 148, 136);
  outline: 1px solid transparent;
  border-radius: 100px;
}
`;

export default GlobalStyle;
