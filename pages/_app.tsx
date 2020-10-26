import '../styles/globals.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import {AppProps} from 'next/app';
import React from 'react';
import ReactGA from 'react-ga';

ReactGA.initialize('UA-115754951-1');

export default function App({Component, pageProps}: AppProps): JSX.Element {
  return <Component {...pageProps} />;
}
