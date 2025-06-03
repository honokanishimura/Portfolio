import config from '~/config.json';
import { FaGithub, FaLinkedin } from 'react-icons/fa';


export const navLinks = [
  {
    label: 'Home',
    pathname: '/',
  },
  {
    label: 'Projects',
    pathname: '/#project-1',
  },
  {
    label: 'resume',
    pathname: '/.pdf',
  },
  
  {
    label: 'Contact',
    pathname: '/contact',
  },
];

export const socialLinks = [
  {
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/nickien/', 
    icon: FaLinkedin,
  },
  {
    label: 'Github',
    url: `https://github.com/honokanishimura`,
    icon: FaGithub,
  },
];
