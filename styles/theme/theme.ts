import { DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
  breakpoints: {
    xxs: 0,
    xs: 576,
    md: 768,
    lg: 992,
    xl: 1200,
    xxl: 1400,
  },
  font: {
    family: {
      barlow: 'Barlow',
      fraunces: 'Fraunces',
    },
    weight: {
      '600': 600,
      '700': 700,
      '900': 900,
    },
  },
  color: {
    common: {
      black: 'hsl(0, 0%, 0%)',
      white: 'hsl(0, 0%, 100%)',
    },
    underline: {
      yellow: 'hsla(51, 100%, 49%, 0.25)',
      red: 'hsla(7, 99%, 70%, 0.25)',
    },
    text: {
      light: 'hsla(0, 0%, 100%, 1)',
      dark: 'hsla(211, 26%, 19%, 1)',
      button: 'hsla(212, 27%, 19%, 1)',
      grey: {
        light: 'hsla(210, 4%, 67%, 1)',
        dark: 'hsla(213, 9%, 39%, 1)',
      },
      green: {
        light: 'hsla(167, 34%, 41%, 1)',
        dark: 'hsla(168, 46%, 31%, 1)',
      },
      photography: {
        green: {
          dark: 'hsla(166, 40%, 24%, 1)',
          normal: 'hsla(166, 30%, 35%, 1)',
        },
        blue: {
          dark: 'hsla(197, 86%, 12%, 1)',
          normal: 'hsla(198, 62%, 26%, 1)',
        },
      },
    },
    background: {
      primary: 'hsl(39, 100%, 99%)',
      footer: 'hsl(168, 34%, 41%)',
      yellow: 'hsl(51, 100%, 49%)',
    },
    action: {
      light: 'hsla(0, 0%, 100%, 1)',
      underline: {
        yellow: 'hsla(51, 100%, 49%, 1)',
        red: 'hsla(7, 99%, 70%, 1)',
      },
      button: 'hsla(0, 0%, 100%, 0.25)',
    },
  },
  radius: 5,
};

export default theme;
