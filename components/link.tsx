import React from 'react';
import {useGlobalStyles} from '../styles/theme';

export type LinkProps = {
  href?: string;
  tooltip?: string;
  noColor?: boolean;
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

export const Link: React.FC<LinkProps> = ({href, tooltip, label, children, noColor}) => {
  const styles = useGlobalStyles();
  return href ? (
    <a
      href={href}
      data-toggle='tooltip'
      data-placement='auto'
      title={tooltip}
      target='_blank'
      rel='noreferrer'
      className={noColor ? styles.linkNoColor : ''}
    >
      {children || label}
    </a>
  ) : (
    <span>{children || label}</span>
  );
};
