import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    breakpoints: {
      xxs: number;
      xs: number;
      md: number;
      lg: number;
      xl: number;
      xxl: number;
    };
    font: {
      family: {
        barlow: string;
        fraunces: string;
      };
      weight: {
        600: number;
        700: number;
        900: number;
      };
    };
    color: {
      common: {
        black: string;
        white: string;
      };
      underline: {
        yellow: string;
        red: string;
      };
      text: {
        light: string;
        dark: string;
        button: string;
        grey: {
          light: string;
          normal: string;
          dark: string;
          link: string;
        };
        green: {
          light: string;
          dark: string;
        };
        photography: {
          green: {
            dark: string;
            normal: string;
          };
          blue: {
            dark: string;
            normal: string;
          };
        };
      };
      background: {
        primary: string;
        yellow: string;
        footer: string;
      };
      action: {
        light: string;
        underline: {
          yellow: string;
          red: string;
        };
        button: string;
        buttonYellow: string;
      };
    };
    radius: number;
  }
}
