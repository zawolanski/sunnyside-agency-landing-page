import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import GlobalStyled from 'styles/globalStyles';
import theme from 'styles/theme/theme';

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => (
  <ThemeProvider theme={theme}>
    <GlobalStyled />
    <Component {...pageProps} />
  </ThemeProvider>
);

export default MyApp;
