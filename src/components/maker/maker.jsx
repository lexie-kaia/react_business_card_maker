import React, { useEffect, useState } from 'react';
import styles from './maker.module.css';
import Header from '../header/header';
import Footer from '../footer/footer';
import Editor from '../editor/editor';
import Preview from '../preview/preview';
import { useHistory } from 'react-router';

const Maker = ({ authService }) => {
  const [cards, setCards] = useState([
    {
      id: '1',
      name: 'Lexie',
      company: 'Google',
      title: 'Software Engineer',
      email: 'lexie@gmail.com',
      message: 'go for it',
      avatarFileName: '1',
      avatarFileUrl: null,
      theme: 'light',
    },
    {
      id: '2',
      name: 'Kaia',
      company: 'Google',
      title: 'Software Engineer',
      email: 'lexie@gmail.com',
      message: 'go for it',
      avatarFileName: '1',
      avatarFileUrl: null,
      theme: 'dark',
    },
    {
      id: '3',
      name: 'Ellie',
      company: 'Google',
      title: 'Software Engineer',
      email: 'lexie@gmail.com',
      message: 'go for it',
      avatarFileName: '1',
      avatarFileUrl: null,
      theme: 'colorful',
    },
  ]);

  const history = useHistory();

  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (!user) {
        history.push('/');
      }
    });
  });

  const addCard = (card) => {
    const updatedCards = [...cards, card];
    setCards(updatedCards);
  };

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor cards={cards} addCard={addCard} />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
