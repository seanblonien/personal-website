import Head from 'next/head';
import React from 'react';
import Typewriter from 'typewriter-effect';
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
        <div className={`${styles.gridContainer} ${styles.center}`}>
          <div className={`${styles.gridItem} ${styles.gridContainer} ${styles.center}`}>
            <h1 className={`${styles.navTitle} ${styles.expand}`}>Sean Blonien</h1>
            <img
              src='/images/me.jpg'
              alt='Sean Blonien Profile'
              className={`${styles.navIcon} ${styles.expand}`}
            />
          </div>
        </div>
        <div
          className={`${styles.gridItem} ${styles.gridContainer} ${styles.center} ${styles.spaceAround}`}
        >
          {NavbarData.map(item => (
            <a
              href={item.href}
              key={item.href}
              title={item.title}
              download={item.download}
              data-toggle='tooltip'
              data-placement='bottom'
            >
              <img src={item.src} className={`${styles.navIcon} ${styles.expand}`} alt={item.alt} />
            </a>
          ))}
        </div>
      </header>
      <main className={`${styles.center}`}>
        <h2 className={styles.textCenter}>About Me</h2>
        <h3 className={styles.textCenter}>
          I am a
          <Typewriter
            component='span'
            options={{
              strings: [
                ' software engineer.',
                ' programmer.',
                ' technophile.',
                ' designer.',
                ' dreamer.',
              ],
              autoStart: true,
              loop: true,
              skipAddStyles: true,
            }}
          />
        </h3>
      </main>
    </>
  );
}
