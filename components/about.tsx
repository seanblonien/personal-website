/* eslint-disable react/no-array-index-key */
import React from 'react';
import Typewriter from 'typewriter-effect';
import {useGlobalStyles} from '../styles/theme';

type Props = {
  introData: string[];
};

export const About: React.FC<Props> = ({introData}) => {
  const styles = useGlobalStyles();
  return (
    <>
      <h2 className={styles.textCenter}>About Me</h2>
      <h3 className={`${styles.textCenter} ${styles.typewriterWrapper}`}>
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
      </h3>
      <div className={`${styles.gridContainerCol} ${styles.center}`}>
        {introData.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </>
  );
};
