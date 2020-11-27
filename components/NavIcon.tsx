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
    <Image
      src={src}
      alt={alt}
      className={cn(styles.navIcon, styles.expand)}
      height={65}
      width={65}
    />
  );
};
