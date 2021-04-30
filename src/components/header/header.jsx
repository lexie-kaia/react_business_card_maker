import React from 'react';
import styles from './header.module.css';

const Header = ({ onLogout }) => (
  <header className={styles.header}>
    <img className={styles.logo} src="/images/logo.png" alt="logo" />
    <h1 className={styles.title}>Business Card Maker</h1>
    {onLogout && (
      <button type="button" className={styles.logout} onClick={onLogout}>
        Logout
      </button>
    )}
  </header>
);

export default Header;
