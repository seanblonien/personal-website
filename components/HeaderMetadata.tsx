import Head from 'next/head';
import React from 'react';
import {MetaData as m} from '../lib/data';

export function HeaderMetadata(): JSX.Element {
  return (
    <Head>
      <title>{m.title}</title>
      <link rel='alternate icon' href={m.favicon} />
      <meta name='keywords' content={m.keywords} />
      <meta name='description' content={m.description} />
      <meta name='HandheldFriendly' content='true' />
      <meta name='MobileOptimized' content='350' />
      <meta property='og:title' content={m.title} />
      <meta property='og:type' content='website' />
      <meta property='og:url' content={m.rooUrl} />
      <meta property='og:image' content={m.previewImage} />
      <meta property='og:description' content={m.description} />
      <meta name='twitter:card' content='summary' />
      <meta name='twitter:site' content={m.twitterHandle} />
      <meta name='twitter:title' content={m.title} />
      <meta name='twitter:description' content={m.description} />
      <meta name='twitter:image' content={m.previewImage} />
      <meta name='theme-color' content={m.themeColor} />
    </Head>
  );
}
