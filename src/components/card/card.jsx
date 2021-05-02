import React from 'react';
import styles from './card.module.css';

const DEFAULT_IMAGE_URL = '/images/default_avatar.png';

const getStyleTheme = (theme) => {
  switch (theme) {
    case 'dark':
      return styles.dark;
    case 'light':
      return styles.light;
    case 'colorful':
      return styles.colorful;
    default:
      throw new Error(`unknown style theme : ${theme}`);
  }
};

const Card = ({ card }) => {
  const { name, company, title, email, message, avatarFileUrl, theme } = card;

  return (
    <li className={`${styles.card} ${getStyleTheme(theme)}`}>
      <img
        className={styles.avatar}
        src={avatarFileUrl ? avatarFileUrl : DEFAULT_IMAGE_URL}
        alt="profile"
      />
      <div className={styles.info}>
        <h4 className={styles.name}>{name}</h4>
        <p className={styles.company}>{company}</p>
        <p className={styles.title}>{title}</p>
        <p className={styles.email}>{email}</p>
        <p className={styles.message}>{message}</p>
      </div>
    </li>
  );
};

export default Card;
