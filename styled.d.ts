import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    device: {
      mobile: string;
      tablet: string;
      labtop: string;
    };
    colors: {
      black: string;
      white: string;
      orange: string;
    };
    fonts: {
      kor: string;
      eng: string;
    };
  }
}
