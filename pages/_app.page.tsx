import Head from 'next/head';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { Global } from '@emotion/react';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../theme';
import { globalStyle } from '../styles/globals.styles';
import { store } from '../store';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Primelab App</title>
        <meta name="description" content="Primelab next.js app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
      <Global styles={globalStyle} />
    </ThemeProvider>
  );
}

export default MyApp;
