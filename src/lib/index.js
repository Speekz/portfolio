import _ from 'lodash';

export const SECTION_TITLES = {
  ABOUT_ME: 'About me',
  STAR_PROJECTS: 'Projects',
  SKILLS: 'Skills',
  CONTACT: 'Contact me',
  SOCIAL: 'Socials'
};

export const GENERAL_INFO = {
  name: 'Johan Bejar',
  resume: {
    reference: 'johan_bejar_resume.pdf',
    title: '> Resume here',
  },
  email: {
    text: 'contact me at ',
    ref: 'johanbejarc@gmail.com',
  },
  socials: [
    {
      title: 'LinkedIn',
      reference: 'https://www.linkedin.com/in/johan-bejar/',
    },
    {
      title: 'github', 
      reference: 'https://github.com/Speekz',
    },
  ],
  copyright: 'Copyright © 2021 Johan Bejar. All rights Reserved',
  backgroundImage: {
    source: 'banner_background.png',
    alt: 'Portfolio Background',
  },
};

export const MENU = [
  {
    title: 'About me',
    reference: '#about-me',
  },
  {
    title: 'Projects',
    reference: '#projects',
  },
  {
    title: 'Skills',
    reference: '#skills',
  },
  {
    title: 'Contact',
    reference: '#contact',
  },
  {
    title: 'Socials',
    reference: '#socials',
  },
];

export const ABOUT_ME = {
  title: {
    first: 'Systems and',
    highlight: 'Software',
    second: 'Engineer',
  },
  description: {
    regular: `I'm a software developer with a tech stack based in the JavaScript programming language. My experience as a systems engineer allows me to `,
    highlight: 'understand, design, and develop large-scale web applications.',
  },
  profilePic: {
    source: 'johan_bejar.jpg',
    alt: 'Profile Picture Johan',
  },
};

export const PROJECTS = [
  {
    title: 'ESGPLAY',
    image: {
      source: 'esgplay.png',
      alt: 'ESGPLAY'
    },
    description: 'Multipurpose Esports Competitive Platform',
    minDetails: [
      'Database Design',
      'Steam Integration',
      'Biometrics and id verification',
      'Full-Stack development',
      'Founder Member'
    ],
    details: [
      `Founded the first esports platform for online gamers to play, connecting over 18k users across Latin America`,
      `Configured and hosted full fledged servers to facilitate 3000+ CS:GO games each month.`,
      `Designed system architecture on AWS with Firebase and PostgreSQL serving 6000+ users per month.`
    ],
    links: [
      {
        title: 'ESGPLAY.net',
        link: 'https://esgplay.net/'
      },
    ],
  },
  {
    title: 'RUNASHVILLE',
    image: {
      source: 'runashville.png',
      alt: 'RUNashville'
    },
    description: 'Social Media and Events Platform for Runners',
    minDetails: [
      'High-scalable REST API',
      'MyERN Stack',
      'Authentication',
      'Database Design',
      'Architecture Design',
      'CI/CD Setup'
    ],
    details: [
      `Modeled highly-scalable API services on NodeJS connecting the RUNashville website to events platforms,
      reducing time to launch an event to 15 minutes from 45 minutes average.`,
      `Developed signup and login pages on React with cryptographic, securing password handling through the
      network.`
    ],
    links: [
      {
        title: 'RUNashville FrontEnd' ,
        link: 'https://github.com/Speekz/RUNashville'
      },
      {
        title: 'RUNashville Backend' ,
        link: 'https://github.com/Speekz/RUNashville-backend'
      }
    ],
  },
  {
    title: 'TCO APP',
    image: {
      source: 'no_gorditos_tco.png',
      alt: 'No Gorditos / TCO'
    },
    description: 'Telemonitoring mobile application for pediatric obesity checks',
    minDetails: [
      'UI/UX Design',
      'Monitoring automatization',
      'Database Design',
      'Architecture Design',
      'Health Report Delivery',
      'Firebase Deployment'
    ],
    details: [
      `Supported both remote monitoring automatically through rules and manually via a specialist to registered
      patients with an Android Application, reducing child onboarding time to the program by 83% from 2 hours to
      10 minutes.`,
      `Delivered health reports about patients considering factors like prescriptions and caregiver participation on a
      predetermined obesity plan in real time with Firebase, reducing dropouts in 38%.`
    ],
    links: [
      {
      title: 'Springer article about TCO' ,
      link: 'https://link.springer.com/chapter/10.1007%2F978-981-33-4565-2_6'
      }
    ],
  },
  {
    title: 'HENDRIX',
    image: {
      source: 'hendix.png',
      alt: 'Hendrix Backend'
    },
    description: 'Retail Ecommerce product detail',
    minDetails: [
      'Microservices Architecture',
      'Load Balancing',
      'Data Import',
      'MERN Stack',
    ],
    details: [
      `Re-engineered NodeJS backend with microservices architecture and load balancing up to 2000 RPS, a 1000%
      improvement.`,
      `Fine-Tuned MongoDB for faster read/write operations using legacy database schemas, achieving 5-15ms
      response times.`
    ],
    links: [
      {
      title: 'Hendrix Backend Service' ,
      link: 'https://github.com/SDC3-HENDRIX/SDC-Reviews'
      }
    ],
  },
  {
    title: 'TATOOINE',
    image: {
      source: 'tatooine.png',
      alt: 'Tatooine frontend'
    },
    description: 'Ecommerce fashion website frontend',
    minDetails: [
      'Click tracking',
      'Analytics Services',
      'Website optimizations',
      'API Integration',
    ],
    details: [
      `Implemented in-house user tracking technology using JQuery to update future improvements /
      enhancements accordingly.`,
      `Identified key modules to display on a product detail website for ecommerce purposes, reducing First
      Meaningful Paint up to 4 seconds.`
    ],
    links: [
      {
      title: 'Tatooine Frontend Repo' ,
      link: 'https://github.com/Tatooine-Group-5/Tatooine'
      },
    ],
  },
];

export const STAR_PROJECTS = PROJECTS.slice(0, 3);

export const MORE_PROJECTS = {
  first: 'Want to see',
  highlight: 'more?',
  reference: 'projects',
};

export const SKILLS_LIST = [
  {
    name: "JAVASCRIPT",
    highlight: true,
  },
  {
    name: "REACT",
    highlight: true,
  },
  {
    name: "NODEJS",
    highlight: true,
  },
  {
    name: "EXPRESS",
    highlight: false,
  },
  {
    name: "LINUX",
    highlight: false,
  },
  {
    name: "CSS",
    highlight: false,
  },
  {
    name: "MONGODB",
    highlight: false,
  },
  {
    name: "MYSQL",
    highlight: false,
  },
  {
    name: "VISUAL-BASIC",
    highlight: false,
  },
  {
    name: "PHP",
    highlight: false,
  },
  {
    name: "SQL-SERVER",
    highlight: false,
  },
  {
    name: "VIM",
    highlight: false,
  },
  {
    name: "FIREBASE",
    highlight: false,
  },
  {
    name: "AWS",
    highlight: false,
  },
  {
    name: "WEBHOOKS",
    highlight: false,
  },
];

export const SKILL_RANDOM = _.shuffle(SKILLS_LIST);

const screenSize = {
  mobileS: '319px',
  mobileM: '374px',
  mobileL: '424px',
  tablet: '767px',
  laptop: '1023px',
  laptopL: '1439px',
  desktop: '2559px',
  desktop4k: '3839px',
  desktop8k: '7679px', 
};

export const DEVICE_MIN = {
  mobileS: `(min-width: ${screenSize.mobileS})`,
  mobileM: `(min-width: ${screenSize.mobileM})`,
  mobileL: `(min-width: ${screenSize.mobileL})`,
  tablet: `(min-width: ${screenSize.tablet})`,
  laptop: `(min-width: ${screenSize.laptop})`,
  laptopL: `(min-width: ${screenSize.laptopL})`,
  desktop: `(min-width: ${screenSize.desktop})`,
  desktop4k: `(min-width: ${screenSize.desktop4k})`,
  desktop8k: `(min-width: ${screenSize.desktop8k})`,
};

export const DEVICE_MAX = {
  mobileS: `(max-width: ${screenSize.mobileS})`,
  mobileM: `(max-width: ${screenSize.mobileM})`,
  mobileL: `(max-width: ${screenSize.mobileL})`,
  tablet: `(max-width: ${screenSize.tablet})`,
  laptop: `(max-width: ${screenSize.laptop})`,
  laptopL: `(max-width: ${screenSize.laptopL})`,
  desktop: `(max-width: ${screenSize.desktop})`,
  desktop4k: `(max-width: ${screenSize.desktop4k})`,
  desktop8k: `(max-width: ${screenSize.desktop8k})`,
};
