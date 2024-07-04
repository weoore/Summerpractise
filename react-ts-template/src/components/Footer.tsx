import React from 'react';
import styles from '../styles/Footer.module.scss';
import logo from '../assets/logo.png';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <img src={logo} alt="Marvel Logo" className={styles.logo} />
      <p>Data provided by Marvel. © {currentYear} MARVEL</p>
      <a href="http://developer.marvel.com" target="_blank" rel="noopener noreferrer">Marvel Developer</a>
    </footer>
  );
};

export default Footer;
