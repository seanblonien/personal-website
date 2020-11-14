/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import {About} from '../components/about';
import {Link} from '../components/link';
import {Project, Projects} from '../components/projects';

export interface NavbarDataItem {
  href: string;
  title: string;
  src: string;
  alt: string;
  download?: true;
}

export const NavbarData: NavbarDataItem[] = [
  {
    href: 'https://www.linkedin.com/in/seanblonien',
    title: 'My LinkedIn Profile',
    src: '/images/linkedin.png',
    alt: 'LinkedIn Icon',
  },
  {
    href: 'https://github.com/seanblonien',
    title: 'My Github',
    src: '/images/github.png',
    alt: 'Github Icon',
  },
  {
    href: 'https://www.facebook.com/seanblonien',
    title: 'My Facebook',
    src: '/images/facebook.png',
    alt: 'Facebook Icon',
  },
  {
    href: 'mailto:seanblonien@gmail.com',
    title: 'Send me an email',
    src: '/images/mail.png',
    alt: 'Email Icon',
  },
  {
    href: 'resume.pdf',
    title: 'My LinkedIn Profile',
    src: '/images/resume.png',
    alt: 'Resume icon',
    download: true,
  },
];

export const IntroData = [
  `Hello there! I'm a software engineer from Dallas, Texas. I am passionate about designing, developing,
  and programming all things software. Whether it be web, app, or game development, I have a wide
  range of experience and excitement in all things tech. I am continually looking forward to future
  projects and opportunities!`,
  `My mission is to contribute to society by developing impactful and meaningful software that resolves
  unsatisfied needs that improves the lives of my family, friends, and community as a whole.`,
  `As a junior pursuing a Bachelors of Science in Computer Science at Baylor University, I am expecting
  to graduate May 2020. When I'm not developing something amazing, I enjoy hanging out with friends,
  hitting the gym, going to EDM concerts, watching eSports, playing games, and reading philosophy and
  science literature.`,
  `Since you made it this far, take a look at some of my projects to see what I've done!`,
];

export const ProjectData: Project[] = [
  {
    title: {
      label: 'Black Gospel Music VR',
      href: 'https://github.com/Baylor-VR-Club-Development-Team/black-gospel-music-vr',
      tooltip: 'Black Gospel Music VR on GitHub',
    },
    picture: {
      link: {
        href: 'http://digitalcollections.baylor.edu/cdm/portal/collection/fa-gospel',
        tooltip: 'Black Gospel Music Restoration Project',
      },
      src: 'images/black_gospel.jpg',
      alt: 'Black Gospel Music Restoration Project',
    },
    body: (
      <p>
        As the Project Manager of{' '}
        <Link href='https://baylorvrclub.com/' tooltip='Baylor VR Club Website'>
          Baylors Virtual Reality Club
        </Link>{' '}
        Development team, my team and I, along with Baylor's Library System and other departments,
        are currently working to create a VR experience so that users can experience the expansive
        archive of the most at-risk pieces and ephemera from{' '}
        <Link
          href='http://digitalcollections.baylor.edu/cdm/portal/collection/fa-gospel'
          tooltip='Black Gospel Music Restoration Project'
        >
          Baylor's Black Gospel Music Restoration Project
        </Link>{' '}
        in a permanent and interactive manner. The collection has various types of media formats
        from United States between the 1940's through the 1980's, all of which will be able to be
        experienced within VR. My team is sponsored by the{' '}
        <Link href='https://developer.oculus.com/oculus-start/' tooltip='Oculus Start'>
          Oculus Start
        </Link>{' '}
        program, which provides our 10 developers with a free Oculus Rift and Oculus Go. Even though
        we are still in development, we plan on making this experience into a permanent feature at
        Baylor's{' '}
        <Link href='https://www.baylor.edu/mayborn/' tooltip='Mayborn Museum'>
          Mayborn Museum
        </Link>
        ,{' '}
        <Link href='https://www.baylor.edu/lib/' tooltip='Baylor Moody Library'>
          Moody Library
        </Link>{' '}
        on Baylor's campus, and potentially at the{' '}
        <Link
          href='https://music.si.edu/story/nmaahc-welcomes-gospel-recordings-baylor-university'
          tooltip='Black Gospel Music Restoration Project at the Smithsonian'
        >
          Smithsonian
        </Link>{' '}
        where the history project is already featured. Responsibilities of my project manager
        position include managing team resources, leading others, teaching others, decision making,
        task delegation, and facilitating communication between the developers, designers, artists,
        and faculty members.
      </p>
    ),
    techStack: [
      {
        label: 'C++',
      },
      {
        label: 'UE4',
        href: 'https://www.unrealengine.com/en-US/what-is-unreal-engine-4',
        tooltip: 'Unreal Engine Website',
      },
      {
        label: 'VR Development',
      },
    ],
  },
];

export const CarouselData = [
  {
    id: 'about',
    title: 'About',
    body: <About introData={IntroData} />,
  },
  {
    id: 'projects',
    title: 'Projects',
    body: <Projects projectData={ProjectData} />,
  },
  {
    id: 'workexperience',
    title: 'Work Experience',
    body: <p>Work in Progress</p>,
  },
];
