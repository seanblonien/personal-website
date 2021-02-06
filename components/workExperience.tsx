import React from 'react';
import {cn} from '../lib/utils';
import {useGlobalStyles} from '../styles/theme';

export interface WorkExperience {
  company: string;
  positions: {
    positionTitle: string;
    dateRange: string;
    body: string;
  }[];
}

export interface WorkExperienceProps {
  data: WorkExperience[];
}

export const WorkExperiences: React.FC<WorkExperienceProps> = ({data}) => {
  const styles = useGlobalStyles();
  return (
    <>
      <h2>Work Experience</h2>
      <div className={cn(styles.gridContainerCol)}>
        {data.map((experience, i) => (
          <div key={i} className={cn(styles.my1)}>
            <h3>{experience.company}</h3>
            {experience.positions.map((position, i) => (
              <React.Fragment key={i}>
                <h4>{position.positionTitle}</h4>
                <h5>{position.dateRange}</h5>
                <p>{position.body}</p>
              </React.Fragment>
            ))}
          </div>
        ))}
      </div>
    </>
  );
};
