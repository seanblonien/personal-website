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
      <h2>About Me</h2>
      <h3 className={cn(styles.typewriterWrapper, styles.bright)}>
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
      <div className={cn(styles.gridContainerCol)}>
        {data.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </>
  );
};
