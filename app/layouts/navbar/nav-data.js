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
    label: 'Resume',
    pathname: 'https://docs.google.com/document/d/1yXbXzaLTlC7Cb3q3M70yiiKiJFy7jZAeGnYA_26d_ag/edit?usp=sharing',
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
