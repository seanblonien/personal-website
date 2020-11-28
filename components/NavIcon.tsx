import Image from 'next/image';
import React from 'react';
import {cn} from '../lib/utils';
import {useGlobalStyles} from '../styles/theme';

export interface NavIconProps {
  src: string;
  alt: string;
}

export const NavIcon: React.FC<NavIconProps> = ({src, alt}) => {
  const styles = useGlobalStyles();
  return (
    <div className={cn(styles.expand, styles.bright)}>
      <Image
        src={src}
        alt={alt}
        className={cn(styles.navIcon)}
        height={65}
        width={65}
        quality={95}
      />
    </div>
  );
};
