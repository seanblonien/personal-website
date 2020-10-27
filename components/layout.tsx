import Head from 'next/head';
import React from 'react';
import {NavbarData} from '../lib/data';
// eslint-disable-next-line css-modules/no-unused-class
import styles from '../styles/styles.module.scss';

Layout.defaultProps = {
  home: undefined,
};

export default function Layout(): JSX.Element {
  return (
    <>
      <Head>
        <title>Sean Blonien | Software Engineer</title>
        <link rel='shortcut icon' href='/images/sean_logo.png' />
        <meta name='author' content='Sean Blonien' />
        <meta
          name='keywords'
          content='software engineer resume dallas austin houston waco intern internship project project scrum agile develop development program programming download bachelors science virtual reality job engineering computer design degree systems ethics economics google leader teach crypto major online research'
        />
        <meta name='description' content="Sean Blonien's personal website." />
      </Head>
      <header className={`${styles.navBar} ${styles.fromAbove}`}>
        <div className={`${styles.gridContainer}`}>
          <p className={`${styles.navTitle} ${styles.gridItem} ${styles.expand}`}>Sean Blonien</p>
          <img
            src='/images/me.jpg'
            alt='Sean Blonien Profile'
            className={`${styles.navIcon} ${styles.gridItem}`}
          />
        </div>
        <div className={`${styles.gridItem} ${styles.gridContainer}`}>
          {NavbarData.map(item => (
            <a
              href={item.href}
              key={item.href}
              title={item.title}
              download={item.download}
              data-toggle='tooltip'
              data-placement='bottom'
            >
              <img src={item.src} className='nav-icon expand' alt={item.alt} />
            </a>
          ))}
        </div>
      </header>
      <main>
        <h1>About Me</h1>
      </main>
    </>
  );
}
