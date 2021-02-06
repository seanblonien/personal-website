/* eslint-disable jsx-a11y/anchor-is-valid */
import Image from 'next/image';
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
      <h2>Projects</h2>
      <div className={cn(styles.gridContainerCol, styles.center)} />
      {data.map(({title, body, techStack, picture}, idx) => (
        <React.Fragment key={idx}>
          <h3 className={cn(styles.mt5, styles.fitContent)}>
            <Link {...title} />
          </h3>
          <div className={cn(styles.gridContainerMd)}>
            <div className={styles.gridItem}>
              <Markdown>{body}</Markdown>
            </div>
            <div className={cn(styles.autoY, styles.expand, styles.p1)}>
              <Link src={picture.link.src} tooltip={picture.link.tooltip}>
                {picture.video ? (
                  <video className={styles.projectPicture} playsInline autoPlay muted loop>
                    <source src={picture.src} type='video/webm' />
                  </video>
                ) : (
                  <Image
                    src={picture.src}
                    className={cn(styles.projectPicture)}
                    alt={picture.alt}
                    width={150}
                    height={150}
                  />
                )}
              </Link>
            </div>
          </div>
          <div className={cn(styles.centerLtMd)}>
            {techStack.map((tech, i) => (
              <span key={i} className={cn(styles.btn, styles.expand, styles.m1)}>
                <Link {...tech} noColor />
              </span>
            ))}
          </div>
        </React.Fragment>
      ))}
    </>
  );
};
