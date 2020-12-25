import React from 'react';
import {About} from '../components/about';
import {Project, Projects} from '../components/projects';
import {WorkExperience, WorkExperiences} from '../components/workExperience';

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
  `Hey there 👋! I'm a software engineer from Dallas, Texas. I am passionate about designing, developing, and programming all things software. Whether it be web, app, or game development, I have a wide  range of experience and excitement in all things tech. I am continually looking forward to future projects and opportunities!`,
  `My mission is to develop impactful and meaningful software that meets unsatisfied needs which improves the lives of my family, friends, and community at large.`,
  ` I am currently working full-time at Pariveda Solutions as a Software Consultant in Dallas. When I'm not working, I enjoy hanging out with friends, running, EDM concerts, eSports, video games, and reading philosophy and science books.`,
  `Since you made it this far, swipe or switch tabs to see my portfolio of projects and professional experience.`,
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
      src: '/images/black_gospel.jpg',
      alt: 'Black Gospel Music Restoration Project',
    },
    body: `<p>As the Project Manager of <Link href='https://baylorvrclub.com/' tooltip='Baylor VR Club Website'>Baylors Virtual Reality Club</Link> Development team, my team and I, along with Baylor's Library System and other departments, are currently working to create a VR experience so that users can experience the expansive archive of the most at-risk pieces and ephemera from <Link href='http://digitalcollections.baylor.edu/cdm/portal/collection/fa-gospel' tooltip='Black Gospel Music Restoration Project'> Baylor's Black Gospel Music Restoration Project</Link> in a permanent and interactive manner. The collection has various types of media formats from United States between the 1940's through the 1980's, all of which will be able to be experienced within VR. My team is sponsored by the <Link href='https://developer.oculus.com/oculus-start/' tooltip='Oculus Start'>Oculus Start</Link> program, which provides our 10 developers with a free Oculus Rift and Oculus Go. Even though we are still in development, we plan on making this experience into a permanent feature at Baylor's <Link href='https://www.baylor.edu/mayborn/' tooltip='Mayborn Museum'> Mayborn Museum</Link>, <Link href='https://www.baylor.edu/lib/' tooltip='Baylor Moody Library'>Moody Library</Link> on Baylor's campus, and potentially at the <Link href='https://music.si.edu/story/nmaahc-welcomes-gospel-recordings-baylor-university' tooltip='Black Gospel Music Restoration Project at the Smithsonian'>Smithsonian</Link> where the history project is already featured. Responsibilities of my project manager position include managing team resources, leading others, teaching others, decision making, task delegation, and facilitating communication between the developers, designers, artists, and faculty members.</p>`,
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
  {
    title: {
      label: 'Animalis',
      href: 'https://animalis-site.herokuapp.com/',
      tooltip: 'Animalis Website',
    },
    picture: {
      link: {
        href: 'https://gitlab.com/fall18-group5/group-5',
        tooltip: 'Animalis on Gitalb',
      },
      src: '/images/animalis.png',
      alt: 'Animalis Logo',
    },
    body: `<p>As a semester long group project for Software Engineering II in fall 2018, I lead my team as the project manager to make a full-stack web application. Our goal was to use new technologies in a team environment over multiple months while using best practices in the context of software engineering. With the help of <Link href="https://www.credera.com/" title="Black Credera Company Website">Credera's</Link> mentorship and <Link href="https://github.com/jlutteringer/petfinder-site" title="Template project on GitHub">template project,</Link> we built a pet sitting service web application called <Link href="https://animalis-site.herokuapp.com/" title="Animalis Website">Animalis</Link>. Users can register to find pet sitting services or to sit for other people's pets. Functionalities include managing pets, finding, posting, and managing sessions, receiving email and in-app notifications, rating users, <Link href="https://www.facebook.com/animalissite/" title="Black Animalis on Facebook">social media</Link> integration, and lots of other features that you can browse yourself. Animalis demonstrates reactive and dynamic features that are common in today's single-page web applications. Because of weekly Scrum meetings and software engineering deliverables (i.e. use cases, domain model, etc.) in addition to the programming, this project has made me well versed in all related concepts of web applications, non-relational databases, agile methodologies, CI/CD, and software engineering practices. Screenshots, documentation, code, and guides can be found on <Link href="https://gitlab.com/fall18-group5/group-5" title="Animalis on Gitalb">Animalis' Gitlab</Link>.</p>`,
    techStack: [
      {
        label: 'React',
      },
      {
        label: 'NodeJS',
      },
      {
        label: 'Java',
      },
      {
        label: 'Elasticsearch',
      },
      {
        label: 'Full-stack Web Development',
      },
    ],
  },
  {
    title: {
      label: 'CryptoKit',
      href: 'https://github.com/seanblonien/CryptoKit',
      tooltip: 'CryptoKit on GitHub',
    },
    picture: {
      link: {
        href: 'https://github.com/seanblonien/CryptoKit',
        tooltip: 'CryptoKit on GitHub',
      },
      src: '/images/cryptokit.png',
      alt: 'CryptoKit Logo',
    },
    body: `<p>For my Software Engineering and Java courses' final project spring 2018, I made an Android app that tracked crypto asset prices using public price data from <Link href="https://coinmarketcap.com/" label="CoinMarketCap">CoinMarketCap</Link>. For now, the app has a login and registration system using <Link href="https://firebase.google.com/" label="Google Firebase">Google Firebase</Link> so that it can eventually be expanded to save favorite assets, sync across devices, and store portfolio information. The user can easily see price and other detailed asset information such as price change, volume, market cap, and a brief description of the asset. The app was made using software engineering best practices and methods. Please view the <Link href="https://github.com/seanblonien/CryptoKit/blob/master/Crypto%20Kit%20Report%20and%20Documentation.pdf" label="CryptoKit Documentation">documentation</Link> for more information.</p>`,
    techStack: [
      {
        label: 'Firebase',
        href: 'https://firebase.google.com/',
        tooltip: 'Google Firebase',
      },
      {
        label: 'Android Programming',
      },
      {
        label: 'Java',
      },
      {
        label: 'XML',
      },
    ],
  },
  {
    title: {
      label: 'C Bear Necessities',
      href: 'https://github.com/shenoisam/hacklahoma',
      tooltip: 'CBearNecessities on GitHu',
    },
    picture: {
      link: {
        href: 'https://github.com/shenoisam/hacklahoma',
        tooltip: 'CBearNecessities on GitHu',
      },
      src: '/images/c_bears_website.webm',
      alt: 'C Bear Necessities Preview',
      video: true,
    },
    body: `<p>For <Link href="https://www.hacklahoma.org/" title="Hacklahoma Homepage">Hacklahoma 2018</Link>, my team <i>C Bears</i> and I created a website that visualized data provided by <Link href="https://v3v10.vitechinc.com/hacklahoma/challenge.html" title="Vitech Challenge Overview">Vitech</Link>. The website uses Google Maps API to show aggregated data related to life insurance based on location and other factors. The map can be filtered such that users can choose only to see the "bear necessities." Additionally there are interactive charts such that user can visualize the data graphically. Here's a link to our <Link href="https://devpost.com/software/cbearnecessities" title="CBearNecessities on Devpost">Devpost submission</Link>.</p>`,
    techStack: [
      {
        label: 'MongoDB',
      },
      {
        label: 'Express',
      },
      {
        label: 'NodeJS',
      },
      {
        label: 'Solr',
      },
      {
        label: 'ChartJS',
      },
      {
        label: 'Bootstrap',
      },
      {
        label: 'HTML5',
      },
      {
        label: 'CSS3',
      },
    ],
  },
  {
    title: {
      label: 'Aries',
      href: 'https://github.com/seanblonien/Aries',
      tooltip: 'Aries on GitHub',
    },
    picture: {
      link: {
        href: 'https://github.com/seanblonien/Aries',
        tooltip: 'Aries on GitHub',
      },
      src: '/images/aries.jpg',
      alt: 'Aries Logo',
    },
    body: `<p>At the world's largest student-lead game jam competition, <Link href="http://www.chillennium.com/lastyear.html" label="Chillenium Homepage">Chillenium 2017</Link>, I lead my team to create a sci-fi virtual reality game from scratch in 48 hours. With no prior experience in Unreal Engine 4, we managed to develop a fully playable game in which the player, Aries, must destroy ten ships on his planet by summoning meteors, casting lightning, or throwing boulders all within VR. Here's our <Link href="https://roundabout.itch.io/aries" label="Aries on itch.io">submission page</Link>, and here's a <Link href="http://www.theeagle.com/news/local/texas-a-m-s-chillennium-a-student-led-challenge-to/article_61b3ceaa-9101-59c9-a780-fe8cacc89a2b.html?lipi=urn%253Ali%253Apage%253Ad_flagship3_profile_view_base_treasury%253B8rl%252BRuKbRHSmIpBB93yv%252Fw%253D%253D&" label="The Eagle's article 'GAME ON'">news article</Link> that features my team and me as well as gives a brief overview of Chillenium.</p>`,
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
  {
    title: {
      label: 'Park Palooza',
      href: 'https://github.com/seanblonien/Park-Palooza',
      tooltip: 'Park Palooza on GitHub',
    },
    picture: {
      link: {
        href: 'https://github.com/seanblonien/Park-Palooza',
        tooltip: 'Park Palooza on GitHub',
      },
      src: '/images/park_palooza.png',
      alt: 'Park Palooza Icon',
    },
    body: `<p>Over the summer of 2017, my friend and I developed a fun Android/iOS video game loosely based on <Link href="https://www.klydewarrenpark.org/" label="Klyde Warren Park Website">Klyde Warren Park</Link>'s Guest Services position that we both were working for at the time. Using <Link href="https://www.yoyogames.com/gamemaker" label="GameMaker">GameMaker</Link> 1.4, we made ten functional levels with original art, sound, and style. Similar to <i>Diner Dash</i>, the player performs small tasks to get points with increasing difficulty. It has become a side project of mine that I intend on adding to in my free time. Fun fact, I registered for a sole proprietorship under the assumed name "Doggo Studios" which is technically my first company.</p>`,
    techStack: [
      {
        label: 'GML',
        href: 'https://www.yoyogames.com/gamemaker',
        tooltip: 'GameMaker',
      },
    ],
  },
  {
    title: {
      label: 'Quantopian Financial Programming',
      href: 'https://github.com/seanblonien/quantopian-algorithms',
      tooltip: 'My algorithms on GitHub',
    },
    picture: {
      link: {
        href: 'https://github.com/seanblonien/quantopian-algorithms',
        tooltip: 'Quantopian Algorithms',
      },
      src: '/images/quantopian.png',
      alt: 'Quantopian Logo',
    },
    body: `<p>For my Technology Seminar Capstone project in spring of 2016, I implemented multiple security trading algorithms in <Link href="https://www.quantopian.com/home" label="Quantopian Homepage">Quantopian</Link>, a Python based IDE, to predict market trends based on statistical and financial concepts from my research. With the ability to back-test my algorithms, I was able to test different strategies to see their effectiveness under different time periods and constraints. Here is the <Link href="https://docs.google.com/presentation/d/1Z-KbWZou5VWFlyNHyjALTQ5fR4lHUbTUem74J3aPCZg/edit?usp=sharing" label="Capstone Presentation">presentation</Link> I gave at the end of the project.</p>`,
    techStack: [
      {
        label: 'Python',
        href: 'https://www.python.org/',
        tooltip: 'Python Website',
      },
    ],
  },
  {
    title: {
      label: 'Smart Mirror',
      href:
        'https://docs.google.com/presentation/d/1CFzvFWoStCu7TJGGeivMuw04JY6aV-RUMOTybCxexwA/edit?usp=sharing',
      tooltip: 'Smart Mirror Presentation',
    },
    picture: {
      link: {
        href:
          'https://docs.google.com/presentation/d/1CFzvFWoStCu7TJGGeivMuw04JY6aV-RUMOTybCxexwA/edit?usp=sharing',
        tooltip: 'Smart Mirror Presentation',
      },
      src: '/images/smart_mirror.jpg',
      alt: 'Smart Mirror Picture',
    },
    body: `<p>My friend and I engineered a "Smart Mirror" that used a Raspberry Pi computer to dynamically display personalized time, weather, schedule, and news while maintaining the reflective functionality of a mirror. We used the open-source JavaScript software <Link href="https://github.com/MichMich/MagicMirror" label="MagicMirror on GitHub">MagicMirror</Link> along with the unix derivative Raspbian OS to customize the display. This rustic looking, hand crafted mirror is a great way for me to see news and my itinerary at quick glance.</p>`,
    techStack: [
      {
        label: 'JavaScript',
      },
      {
        label: 'Bash',
      },
    ],
  },
];

export const WorkExperienceData: WorkExperience[] = [
  {
    company: 'AT&T',
    positionTitle: 'TDP - Engineering and Operations Intern',
    dateRange: 'May 2018 - August 2018',
    body: `Successfully used data analysis techniques to aggregate, automate, and visualize AT&T’s corporate Wi-Fi call center data that identifies chronic drivers. On top of saving countless hours by automating manager reports, my analysis will continue to serve as a permanent solution that will aid in breaking down over $250,000 of costs every month. This was done using VBA and Power Query M to parse and process the data and turn it into clean and meaningful tables and charts.`,
  },
  {
    company: 'Baylor University',
    positionTitle: 'Classroom Technology Assistant',
    dateRange: 'August 2016 - March 2020',
    body: `Provided IT support for Baylor's classroom technology throughout campus. Through daily communication with other faculty and staff members, I helped fully address problems as they arose while providing customer service. Using my technical background and troubleshooting abilities, I diagnosed and resolved hardware and software issues whether it be a projector not displaying, a device not turning on, or audio not playing. Other tasks included routine maintenance and room checks to keep campus technology as functional as possible.`,
  },
  {
    company: 'Klyde Warren Park',
    positionTitle: 'Guest Services Representative',
    dateRange: 'Summers 2015, 2016, 2017',
    body: `Supervised recreational equipment in the heart of Downtown Dallas's urban park. Responsibilities included providing customer service to patrons and assisting with events held at the park. While there, I automated and revamped the park’s patron counting system to a much more dynamic and easy-to-use system using Google Sheets. Additionally, I am trained to setup professional stage equipment for large or small events.`,
  },
];

export const CarouselData = [
  {
    id: 'about',
    title: 'About',
    body: <About data={IntroData} />,
  },
  {
    id: 'projects',
    title: 'Projects',
    body: <Projects data={ProjectData} />,
  },
  {
    id: 'workexperience',
    title: 'Work Experience',
    body: <WorkExperiences data={WorkExperienceData} />,
  },
];
