import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      text: '#272727';
      background: '#fff';
      primary: '56b280';
      primaryText: '#fff';
      secondary: '#d6d6d6';
      secondaryText: '#272727';
      tertiary: '#a8a8a8';
      tertiaryText: '#fff';
    };
    fonts: {
      raleway: 'Raleway Variable';
    };
  }
}
