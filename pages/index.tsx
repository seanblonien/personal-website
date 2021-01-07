import Head from 'next/head';
import React from 'react';
import Carousel from 'react-elastic-carousel';
import {NavIcon} from '../components/NavIcon';
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
      <header className={cn(styles.navBar, styles.gridContainer)}>
        <div className={cn(styles.gridContainer, styles.center)}>
          <div className={cn(styles.auto, styles.gridContainer, styles.center)}>
            <h1 className={cn(styles.navTitle, styles.expand)}>Sean Blonien</h1>
            <NavIcon src='/images/me.webp' alt='Sean Blonien Profile' />
          </div>
        </div>
        <div className={cn(styles.auto, styles.gridContainer, styles.center, styles.spaceAround)}>
          {NavbarData.map(item => (
            <a
              href={item.href}
              key={item.href}
              title={item.title}
              download={item.download}
              data-toggle='tooltip'
              data-placement='bottom'
            >
              <NavIcon src={item.src} alt={item.alt} />
            </a>
          ))}
        </div>
      </header>
      <main>
        <Carousel
          showArrows={false}
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
          className={cn(styles.carousel)}
        >
          {CarouselData.map(page => (
            <div key={page.id} className={cn(styles.center, styles.zoom, styles.p1)} id={page.id}>
              {page.body}
            </div>
          ))}
        </Carousel>
      </main>
    </>
  );
}
