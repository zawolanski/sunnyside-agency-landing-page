import Layout from 'components/Layout';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import GlobalStyled from 'styles/globalStyles';
import theme from 'styles/theme/theme';

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => (
  <>
    <Head>
      <title>sunnyside</title>
    </Head>
    <ThemeProvider theme={theme}>
      <GlobalStyled />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  </>
);

export default MyApp;
