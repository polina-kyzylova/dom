import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  .a {
    text-decoration: none;
  }
  
  .a:visited {
    text-decoration: none;
  }
  
  h1, h2, h3, h4, h5, p {
    margin: 0;
    padding: 0;
  }

  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  }

  @font-face {
    font-family: "Kosmos";
    src: local("kosmos"),
      url("./shared/Kosmos/Kosmos.otf") format("opentype");
    font-weight: normal;
  }

  /* ширина scrollbar */
  body::-webkit-scrollbar {
    width: 6px;
  }

  /* цвет дорожки */
  body::-webkit-scrollbar-track {
    background: transparent;
  }

  /* цвет scrollbar */
  body::-webkit-scrollbar-thumb {
    background-color: #D3D3D1;
    border-radius: 20px;
    border: 3px solid transparent;
  }
`;
