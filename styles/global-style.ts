import { useRouter } from 'next/router';
import { createGlobalStyle } from 'styled-components';

const locale = useRouter;

const GlobalStyle = createGlobalStyle`
  html,
  body {
    min-width: 300px;
    color: ${({ theme }) => theme.colors.black};
    background-color: ${({ theme }) => theme.colors.white};
    padding: .6rem 1rem;
    margin: 0;
    font-family: 'Noto Sans KR', 'Roboto', sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;

    &:lang(ko) {
      font-family: 'Noto Sans KR', sans-serif;
    }

    &:lang(en) {
      font-family: 'Roboto', sans-serif;
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

  button {
    margin: 0; 
    padding: 0;
    border: none;
    outline:none;
    cursor: pointer;
    color: inherit;
    font-size: inherit;
    font-family: 'Noto Sans KR', sans-serif;  
    letter-spacing: 1px;
    background: transparent;
    transition: all 0.2s ease-in;
  }
`;

export default GlobalStyle;
