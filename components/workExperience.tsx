import React from 'react';
import {cn} from '../lib/utils';
import {useGlobalStyles} from '../styles/theme';

export interface WorkExperience {
  company: string;
  positionTitle: string;
  dateRange: string;
  body: string;
}

export interface WorkExperienceProps {
  data: WorkExperience[];
}

export const WorkExperiences: React.FC<WorkExperienceProps> = ({data}) => {
  const styles = useGlobalStyles();
  return (
    <>
      <h1>Work Experience</h1>
      <div className={cn(styles.gridContainerCol)}>
        {data.map((experience, i) => (
          <div key={i} className={cn(styles.my1)}>
            <h2>{experience.company}</h2>
            <h3>{experience.positionTitle}</h3>
            <h4>{experience.dateRange}</h4>
            <p>{experience.body}</p>
          </div>
        ))}
      </div>
    </>
  );
};
