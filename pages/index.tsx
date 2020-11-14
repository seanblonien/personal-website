import Head from 'next/head';
import React from 'react';
import Carousel from 'react-elastic-carousel';
import {noop} from '../components/utils';
import {CarouselData, NavbarData} from '../lib/data';
import {cn} from '../lib/utils';
import {useGlobalStyles} from '../styles/theme';

export default function Layout(): JSX.Element {
  const styles = useGlobalStyles();
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
      <header className={cn(styles.navBar, styles.fromAbove, styles.gridContainer)}>
        <div className={cn(styles.gridContainer, styles.center)}>
          <div className={cn(styles.gridItem, styles.gridContainer, styles.center)}>
            <h1 className={cn(styles.navTitle, styles.expand)}>Sean Blonien</h1>
            <img
              src='/images/me.jpg'
              alt='Sean Blonien Profile'
              className={cn(styles.navIcon, styles.expand)}
            />
          </div>
        </div>
        <div
          className={cn(styles.gridItem, styles.gridContainer, styles.center, styles.spaceAround)}
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
              <img src={item.src} className={cn(styles.navIcon, styles.expand)} alt={item.alt} />
            </a>
          ))}
        </div>
      </header>
      <main className={styles.fromBelow}>
        <Carousel
          renderArrow={({type, onClick}): JSX.Element => (
            <div onClick={onClick} onKeyPress={noop} role='button' tabIndex={0}>
              <img
                src={type === 'PREV' ? '/images/back.svg' : '/images/next.svg'}
                alt={type === 'PREV' ? 'Previous' : 'Next'}
                aria-label={type === 'PREV' ? 'Previous' : 'Next'}
                className={type === 'PREV' ? styles.carouselIconPrev : styles.carouselIconNext}
              />
            </div>
          )}
          renderPagination={({pages, activePage, onClick}): JSX.Element => (
            <div className={styles.carouselIndicators}>
              {pages.map((page, i) => (
                <button
                  type='button'
                  key={i}
                  onClick={(): void => onClick(String(i))}
                  className={cn(styles.btn, styles.expand, styles.carouselIndicator, {
                    [styles.active]: activePage === i,
                  })}
                  tabIndex={activePage === i ? -1 : 0}
                >
                  {CarouselData[i].title}
                </button>
              ))}
            </div>
          )}
          className={styles.carousel}
        >
          {CarouselData.map(page => (
            <div key={page.id} className={cn(styles.center)}>
              {page.body}
            </div>
          ))}
        </Carousel>
      </main>
    </>
  );
}
