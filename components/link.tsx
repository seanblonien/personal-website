import {useWindowSize} from '../lib/hooks';
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
  const size = useWindowSize();
  const Component = hoverSrc ? 'span' : 'a';
  const title = tooltip || label || (typeof children === 'string' ? children : undefined);
  return src || hoverSrc ? (
    <Component
      href={src}
      data-toggle='tooltip'
      data-placement='auto'
      title={title}
      target='_blank'
      rel='noreferrer'
      className={cn(noColor && styles.linkNoColor, hoverSrc && styles.showOnHover)}
    >
      {children || label}
      {hoverSrc && (
        <img
          src={hoverSrc}
          alt={tooltip}
          style={{maxWidth: Math.min(0.5 * (size.width || 600), 600)}}
          loading='lazy'
        />
      )}
    </Component>
  ) : (
    <span>{children || label}</span>
  );
};
