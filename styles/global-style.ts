import { useRouter } from 'next/router';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    min-width: 300px;
    color: ${({ theme }) => theme.colors.black};
    background-color: ${({ theme }) => theme.colors.white};
    padding: .6rem 1rem;
    margin: 0;
    letter-spacing: .12em;

    &:lang(ko) {
      font-family: 'Noto Sans KR', 'Roboto', sans-serif;
    }

    &:lang(en) {
      font-family: 'Roboto', 'Noto Sans KR', sans-serif;
    }
  }

  * {
    box-sizing: border-box;

    &:lang(ko) {
      font-family: 'Noto Sans KR', 'Roboto', sans-serif;
    }

    &:lang(en) {
      font-family: 'Roboto', 'Noto Sans KR', sans-serif;
    }
  }

  section {
    display: flex;
    width: 100%;
  }

  h1, h2, h3, h4, h5, p{
    margin: 0;
    padding: 0;
  }
  
  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    margin: 0; 
    padding: 0;
    border: none;
    outline:none;
    color: inherit;
    font-size: inherit;
    font-family: 'Noto Sans KR', sans-serif;  
    letter-spacing: 1px;
    background: transparent;
    transition: all 0.2s ease-in;
    cursor: pointer;
  }
`;

export default GlobalStyle;
