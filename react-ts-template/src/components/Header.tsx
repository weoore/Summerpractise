import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../styles/Header.module.scss';
import logo from '../assets/logo.png';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <img src={logo} alt="Marvel Logo" className={styles.logo} />
      <nav>
        <NavLink to="/characters" className={({ isActive }) => isActive ? styles.active : ''}>Characters</NavLink>
        <NavLink to="/comics" className={({ isActive }) => isActive ? styles.active : ''}>Comics</NavLink>
      </nav>
    </header>
  );
};

export default Header;
