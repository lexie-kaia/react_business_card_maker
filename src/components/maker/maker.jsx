import React, { useEffect, useState } from 'react';
import styles from './maker.module.css';
import Header from '../header/header';
import Footer from '../footer/footer';
import Editor from '../editor/editor';
import Preview from '../preview/preview';
import { useHistory } from 'react-router';

const Maker = ({ FileInput, authService, cardRepository }) => {
  const history = useHistory();

  const [cards, setCards] = useState({
    // 1: {
    //   id: '1',
    //   name: 'Lexie',
    //   company: 'Google',
    //   title: 'Software Engineer',
    //   email: 'lexie@gmail.com',
    //   message: 'go for it',
    //   avatarFileName: '1',
    //   avatarFileUrl: null,
    //   theme: 'light',
    // },
    // 2: {
    //   id: '2',
    //   name: 'Kaia',
    //   company: 'Google',
    //   title: 'Software Engineer',
    //   email: 'lexie@gmail.com',
    //   message: 'go for it',
    //   avatarFileName: '1',
    //   avatarFileUrl: null,
    //   theme: 'dark',
    // },
    // 3: {
    //   id: '3',
    //   name: 'Ellie',
    //   company: 'Google',
    //   title: 'Software Engineer',
    //   email: 'lexie@gmail.com',
    //   message: 'go for it',
    //   avatarFileName: '1',
    //   avatarFileUrl: null,
    //   theme: 'colorful',
    // },
  });
  const [userId, setUserId] = useState(null);

  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setUserId(user.uid);
      } else {
        history.push('/');
      }
    });
  }, [authService, userId, history]);

  useEffect(() => {
    if (!userId) return;
    const stopSync = cardRepository.syncCards(userId, (cards) =>
      setCards(cards)
    );

    return () => stopSync();
  }, [userId, cardRepository]);

  const addOrUpdateCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      updated[card.id] = card;
      return updated;
    });
    cardRepository.saveCard(userId, card);
  };

  const deleteCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      delete updated[card.id];
      return updated;
    });
    cardRepository.removeCard(userId, card);
  };

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor
          FileInput={FileInput}
          cards={cards}
          addCard={addOrUpdateCard}
          updateCard={addOrUpdateCard}
          deleteCard={deleteCard}
        />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;

// updateCard ??????
// 1. cards array -> object
// 1) array & for

// cards = [card1, card2, ...]

// cards.map(card => {<li id={card.id} card={card}>})

// const updateCard = (card) => {
//  const updated = cards.map(item => {
//    if(card.id === item.id) return card
//    return item
//  })
//  setCard(updated)
// }

// array??? for??? ???????????? ???????????? ?????? ?????? ????????? ??? ??????

// 2) objectList
// cards = { cardId1 : card1, cardId2 : card2, ...}

// Object.key(cards).map(key => <li id={key} card={cards[key]}>)

// const updateCard = (card) => {
//  const updated = { ...cards };
//  updated[card.id]=card;
//  setCards(updated)
// }

// 2. setState((state) => return newState)
// state??? ??????????????? ??? state??? ???????????? outdated??? state??? ??????????????? ?????? -> setState(callback) callback??? ???????????? setState??? ????????? ??? state??? ????????? ??? ??????
