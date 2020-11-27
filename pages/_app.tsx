import {jssPreset, StylesProvider, ThemeProvider} from '@material-ui/styles';
import {create} from 'jss';
import extend from 'jss-plugin-extend';
import global from 'jss-plugin-global';
import {AppProps} from 'next/app';
import Head from 'next/head';
import React from 'react';
import ReactGA from 'react-ga';
import {theme} from '../styles/theme';

ReactGA.initialize('UA-115754951-1');

const jss = create({
  plugins: [...jssPreset().plugins, extend(), global()],
});

export default function App({Component, pageProps}: AppProps): JSX.Element {
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    jssStyles?.parentElement?.removeChild(jssStyles);
  }, []);

  return (
    <>
      <Head>
        <meta
          name='viewport'
          content='width=device-width,initial-scale=1,maximum-scale=1,user-scalable=0'
        />
      </Head>
      <StylesProvider jss={jss}>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </StylesProvider>
    </>
  );
}
