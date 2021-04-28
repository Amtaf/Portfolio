import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Aq Fatma', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: 'welcome to my website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Fatma Aq',
  subtitle: 'Software|Blockchain Developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'info.png',
  paragraphOne: 'Hello I am Fatma,a software engineer,Blockchain developer,instructor and innovator based in Kenya',
  paragraphTwo: 'I am a decentralized web advocate who enjoys creating solutions on the web such as websites,web applications and anything in between.Being a decentralized web and blockchain enthusiast i enjoy researching and being upto date with the latest developments in this technology.I also develop content and courses on Youtube and Udemy respectively concerning the same field in technology. ',
  paragraphThree: 'Here are some of the technologies i have worked with: Javascript(React),IPFS,HTML,CSS,wordpress,MySQL Databases,Node JS,Hyperledger sawtooth',
  resume: 'https://github.com/Amtaf/Resume-uno/blob/main/curiculum+vitae-converted.pdf', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'cov.png',
    title: 'Covid 19 Tracker',
    info: 'The covid-19 tracker app is built using React js front-end and the data is fetched from disease.sh .the beautiful UI is powered by material UI.',
    info2: 'The functionality of the map and user interface was made possible through the integration of Leaflet Maps.The graph is built using chart.js library.',
    url: 'http://covid19-755e8.web.app/',
    repo: 'https://github.com/Amtaf/Covid-19-tracker', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'amazon.png',
    title: 'Amazon Clone',
    info: 'An ecommerce Amazon clone built from scratch with almost all the backend and Frontend functionalities of the real amazon web app',
    info2: 'MERN stack App powered by firebase',
    url: 'https://clone-5ba38.web.app/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Ipfs.png',
    title: 'Decentralized File storage',
    info: 'A decentralized file upload system powered by javascript,Ethereum Blockchain and IPFS',
    info2: '',
    url: '#',
    repo: 'https://github.com/Amtaf/EthereumIPFS', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'abdulqadirfatma@gmail.com',
  
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/fatma-abdulqadir-aab81a99/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/Amtaf',
    },
    {
      id: nanoid(),
      name: 'youtube',
      url: 'https://www.youtube.com/channel/UCNFJXUGsKo6vYh7cNvCbgbw',
    },
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/fatima39_fatima',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
