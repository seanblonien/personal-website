const name = 'Sean Blonien';
export const siteTitle = `${name}'s Website`;

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