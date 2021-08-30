import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    font: {
      family: {
        roboto: string;
      };
      weight: {
        regular: number;
        bold: number;
      };
    };
    color: {
      primary: string;
      text: {
        normal: string;
      };
    };
  }
}
