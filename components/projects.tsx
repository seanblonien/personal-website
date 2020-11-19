import React from 'react';
import {cn} from '../lib/utils';
import {useGlobalStyles} from '../styles/theme';
import {Link, LinkProps} from './link';
import {Markdown} from './markdown';

export interface Project {
  title: LinkProps;
  body: string;
  techStack: LinkProps[];
  picture: {
    link: Partial<LinkProps>;
    src: string;
    alt: string;
    video?: true;
  };
}

export interface ProjectsProps {
  data: Project[];
}

export const Projects: React.FC<ProjectsProps> = ({data}) => {
  const styles = useGlobalStyles();
  return (
    <>
      <h1>Projects</h1>
      <div className={cn(styles.gridContainerCol)} />
      {data.map(({title, body, techStack, picture}, idx) => (
        <React.Fragment key={idx}>
          <h2 className={cn(styles.mt5, styles.fitContent)}>
            <Link {...title} />
          </h2>
          <div className={cn(styles.gridContainerMd)}>
            <div className={styles.gridItem}>
              <Markdown>{body}</Markdown>
            </div>
            <div className={cn(styles.autoY, styles.expand)}>
              <Link href={picture.link.href} tooltip={picture.link.tooltip}>
                {picture.video ? (
                  <video className={styles.projectPicture} playsInline autoPlay muted loop>
                    <source src={picture.src} type='video/webm' />
                  </video>
                ) : (
                  <img src={picture.src} className={styles.projectPicture} alt={picture.alt} />
                )}
              </Link>
            </div>
          </div>
          <div className={cn(styles.centerLtMd)}>
            {techStack.map((tech, i) => (
              <span key={i} className={cn(styles.btn, styles.expand, styles.m1)}>
                <Link {...tech} />
              </span>
            ))}
          </div>
        </React.Fragment>
      ))}
    </>
  );
};
