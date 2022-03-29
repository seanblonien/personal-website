import {NavbarData} from '../lib/data';
import {cn} from '../lib/utils';
import {useGlobalStyles} from '../styles/theme';
import {NavIcon} from './NavIcon';

export const HeaderNavigation: React.FC = () => {
  const styles = useGlobalStyles();
  return (
    <header className={cn(styles.navBar, styles.gridContainer)}>
      <div className={cn(styles.gridContainer, styles.center)}>
        <div className={cn(styles.auto, styles.gridContainer, styles.center)}>
          <h1 className={cn(styles.navTitle, styles.expand)}>Sean Blonien</h1>
          <NavIcon src='/images/sean_square.png' alt='Sean Blonien Profile Image' />
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
            target='_blank'
            rel='noreferrer'
          >
            <NavIcon src={item.src} alt={item.alt} />
          </a>
        ))}
      </div>
    </header>
  );
};
