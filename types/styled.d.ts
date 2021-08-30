import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    font: {
      family: {
        roboto: string;
        sourceCode: string;
      };
      weight: {
        light: number;
        regular: number;
        bold: number;
      };
    };
    color: {
      primary: string;
      secondary: string;
      text: {
        normal: string;
      };
    };
    radius: number;
  }
}
