import React from 'react';
import styles from './preview.module.css';
import Card from '../card/card';

const Preview = ({ cards }) => {
  return (
    <section className={styles.preview}>
      <h3 className={styles.title}>Preview</h3>
      <ul className={styles.cards}>
        {Object.keys(cards).map((key) => (
          <Card key={key} card={cards[key]}></Card>
        ))}
      </ul>
    </section>
  );
};

export default Preview;
