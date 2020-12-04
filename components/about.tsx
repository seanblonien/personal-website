import React from 'react';
import Typewriter from 'typewriter-effect';
import {cn} from '../lib/utils';
import {useGlobalStyles} from '../styles/theme';

export interface AboutProps {
  data: string[];
}

export const About: React.FC<AboutProps> = ({data}) => {
  const styles = useGlobalStyles();
  return (
    <>
      <h1>About Me</h1>
      <h2 className={cn(styles.typewriterWrapper, styles.bright)}>
        I am a
        <Typewriter
          component='span'
          options={{
            strings: [
              ' software engineer.',
              ' programmer.',
              ' technophile.',
              ' designer.',
              ' dreamer.',
            ],
            autoStart: true,
            loop: true,
            skipAddStyles: true,
          }}
        />
      </h2>
      <div className={cn(styles.gridContainerCol)}>
        {data.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </>
  );
};
