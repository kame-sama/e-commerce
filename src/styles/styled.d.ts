import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      text: '#272727';
      background: '#fff';
      primary: '#56b280';
      primaryText: '#fff';
      secondary: '#d6d6d6';
      secondaryText: '#272727';
      tertiary: '#a8a8a8';
      tertiaryText: '#fff';
    };
    fonts: {
      raleway: 'Raleway Variable';
    };
    fontWghts: {
      thin: 100;
      extraLight: 200;
      light: 300;
      regular: 400;
      medium: 500;
      semiBold: 600;
      bold: 700;
      extraBold: 800;
      black: 900;
    };
  }
}
