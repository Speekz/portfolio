export const SKILLS_LIST = [
  "JAVASCRIPT",
  "REACT",
  "EXPRESS",
  "LINUX",
  "HTML",
  "CSS",
  "JQUERY",
  "MONGODB",
  "MYSQL",
  "JAVA",
  "VISUAL-BASIC",
  "PHP",
  "C#",
  "SQL-SERVER",
  "VIM",
  "FIREBASE",
  "AWS",
  "WEBHOOKS",
  "AUTHENTICATION"
];

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
