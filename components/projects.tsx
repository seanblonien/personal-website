import React from 'react';
import {cn} from '../lib/utils';
import {useGlobalStyles} from '../styles/theme';
import {Link, LinkProps} from './link';

export interface Project {
  title: LinkProps;
  body: JSX.Element | string;
  techStack: LinkProps[];
  picture: {
    link: Partial<LinkProps>;
    src: string;
    alt: string;
  };
}

export interface ProjectsProps {
  projectData: Project[];
}

export const Projects: React.FC<ProjectsProps> = ({projectData}) => {
  const styles = useGlobalStyles();
  return (
    <>
      <h1>Projects</h1>
      <div className={cn(styles.gridContainerCol)} />
      {projectData.map(({title, body, techStack, picture}, idx) => (
        <React.Fragment key={idx}>
          <h2 className={cn(styles.expand, styles.my1)}>
            <Link {...title} />
          </h2>
          <div className={styles.gridContainerMd}>
            <div className={styles.gridItem}>{body}</div>
            <div className={cn(styles.gridItem, styles.expand)}>
              <Link href={picture.link.href} tooltip={picture.link.tooltip}>
                <img src={picture.src} className={styles.projectPicture} alt={picture.alt} />
              </Link>
            </div>
          </div>
          <div className={styles.py1}>
            {techStack.map((tech, i) => (
              <span key={i} className={cn(styles.btn, styles.expand, styles.mr1)}>
                <Link {...tech} />
              </span>
            ))}
          </div>
        </React.Fragment>
      ))}
    </>
  );
};
