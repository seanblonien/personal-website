import Carousel from 'react-elastic-carousel';
import {HeaderMetadata} from '../components/HeaderMetadata';
import {HeaderNavigation} from '../components/HeaderNavigation';
import {CarouselData} from '../lib/data';
import {cn} from '../lib/utils';
import {useGlobalStyles} from '../styles/theme';

const Layout: React.FC = () => {
  const styles = useGlobalStyles();
  return (
    <>
      <HeaderMetadata />
      <HeaderNavigation />
      <main>
        <Carousel
          showArrows={false}
          isRTL={false}
          renderPagination={({pages, activePage, onClick}): JSX.Element => (
            <div className={styles.carouselIndicators}>
              {pages.map((page, i) => (
                <button
                  type='button'
                  key={i}
                  onClick={(): void => (activePage !== i ? onClick(String(i)) : undefined)}
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
            <div key={page.id} className={cn(styles.center, styles.p1)} id={page.id}>
              {page.body}
            </div>
          ))}
        </Carousel>
      </main>
    </>
  );
};

export default Layout;
