import { DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
  device: {
    mobile: `screen and (max-width: 480px)`,
    tablet: `screen and (max-width: 768px)`,
    labtop: `screen and (max-width: 1024px)`,
  },
  colors: {
    black: '#1E1F1D',
    white: '#EEEEEE',
  },
  fonts: {
    kor: `'Noto Sans KR', sans-serif`,
    eng: `'Roboto', sans-serif`,
  },
};
