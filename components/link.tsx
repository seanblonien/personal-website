import React from 'react';

export type LinkProps = {
  href?: string;
  tooltip?: string;
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

export const Link: React.FC<LinkProps> = ({href, tooltip, label, children}) => {
  return href ? (
    <a
      href={href}
      data-toggle='tooltip'
      data-placement='auto'
      title={tooltip}
      target='_blank'
      rel='noreferrer'
    >
      {children || label}
    </a>
  ) : (
    <span>{children || label}</span>
  );
};
