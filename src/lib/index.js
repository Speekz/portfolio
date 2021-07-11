import _ from 'lodash';

export const PROJECTS = [
  {
    title: 'NO GORDITOS / TCO APP',
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
    links: [{
      title: 'Springer article about TCO' ,
      link: 'https://link.springer.com/chapter/10.1007%2F978-981-33-4565-2_6'
    }]
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
    ]
  }
]

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
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px'
};

export const DEVICE_MIN = {
  mobileS: `(min-width: ${screenSize.mobileS})`,
  mobileM: `(min-width: ${screenSize.mobileM})`,
  mobileL: `(min-width: ${screenSize.mobileL})`,
  tablet: `(min-width: ${screenSize.tablet})`,
  laptop: `(min-width: ${screenSize.laptop})`,
  laptopL: `(min-width: ${screenSize.laptopL})`,
  desktop: `(min-width: ${screenSize.desktop})`,
  desktopL: `(min-width: ${screenSize.desktop})`
};

export const DEVICE_MAX = {
  mobileS: `(max-width: ${screenSize.mobileS})`,
  mobileM: `(max-width: ${screenSize.mobileM})`,
  mobileL: `(max-width: ${screenSize.mobileL})`,
  tablet: `(max-width: ${screenSize.tablet})`,
  laptop: `(max-width: ${screenSize.laptop})`,
  laptopL: `(max-width: ${screenSize.laptopL})`,
  desktop: `(max-width: ${screenSize.desktop})`,
  desktopL: `(max-width: ${screenSize.desktop})`
};
