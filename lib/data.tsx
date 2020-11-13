import styles from '../styles/styles.module.scss';
import Typewriter from 'typewriter-effect';
import { About } from '../components/about';

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
  `Since you made it this far, take a look at some of my projects to see what I've done!`
];

export const CarouselData = [
  {
    id: 'about',
    title: 'About',
    body: <About introData={IntroData}/>
  },
  {
    id: 'projects',
    title: 'Projects',
    body: <p>Work in Progress</p>
  },
  {
    id: 'workexperience',
    title: 'Work Experience',
    body: <p>Work in Progress</p>
  },
];