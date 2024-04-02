import styled, { createGlobalStyle } from 'styled-components';
import { theme } from 'theme';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`

 html {
    box-sizing: border-box;
  }

  *:before,
  *:after {
    box-sizing: inherit;
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
     
   }

  body {
    font-family: 'Right Grotesk Compact Black', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    font-display: swap;
    color: ${theme.colors.primary};
    background-color: ${theme.colors.bg};
  }

 h1,h2,h3,h4,h5,h6,p {
    margin: 0;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  a {
    text-decoration: none;
    color: inherit;
      }

  button {
    font-family: inherit;
    padding: 0;
    margin: 0;
    cursor: pointer;
    outline: none;
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover, 
  input:-webkit-autofill:focus {
  -webkit-box-shadow: 0 0 0px 1000px #1E1E1E inset;

}

input:-webkit-autofill {
  -webkit-text-fill-color: white !important;
}
  `;
export const Container = styled.div`
  margin: 0 auto;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: calc(100vw - 128px);
  @media screen and (min-width: 768px) {
    padding: 0px 64px;
    align-items: start;
    width: 720px;
  }

  @media screen and (min-width: 1280px) {
    width: 1160px;
  }
`;
