import React from 'react';
import {cn} from '../lib/utils';
import {useGlobalStyles} from '../styles/theme';

export type LinkProps = {
  src?: string;
  tooltip?: string;
  noColor?: boolean;
  hoverSrc?: string;
} & (
  | {
      label: string;
      children?: null;
    }
  | {
      children: string | JSX.Element;
      label?: null;
    }
);

export const Link: React.FC<LinkProps> = ({src, tooltip, label, children, noColor, hoverSrc}) => {
  const styles = useGlobalStyles();
  return src || hoverSrc ? (
    <a
      href={src}
      data-toggle='tooltip'
      data-placement='auto'
      title={tooltip}
      target='_blank'
      rel='noreferrer'
      className={cn(noColor && styles.linkNoColor, hoverSrc && styles.showOnHover)}
    >
      {children || label}
      {hoverSrc && <img src={hoverSrc} alt={tooltip} />}
    </a>
  ) : (
    <span>{children || label}</span>
  );
};
