import styled, { createGlobalStyle, css } from "styled-components";
import { theme } from "./core/theme/index";

/* ----- Global styles ----- */
export default createGlobalStyle`
  @font-face {
    font-family: "Kosmos";
    src: local("kosmos"),
      url("/assets/fonts/Kosmos/Kosmos.otf") format("opentype");
    font-weight: normal;
  }

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
    font-family: 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
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

/* ----- Common styled components ----- */
export const PageContainer = styled.div`
  margin: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const BaseButton = styled.button`
  border: none;
  outline: none;
  width: fit-content;
  padding: 0.8rem 1.8rem;
  cursor: pointer;
  background-color: ${theme.colors.lightRed};
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
`;

export const BaseCard = css`
  background-color: ${theme.colors.lightGray};
  border-radius: 10px;
  padding: 2rem;
`;

export const Title = styled.h3`
  font-size: 2rem;
  font-weight: 400;
  padding-bottom: .4rem;
`;

export const Subtitle = styled.p`
  font-size: 1.2rem;
`;
