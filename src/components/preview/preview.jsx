import React from 'react';
import styles from './preview.module.css';
import Card from '../card/card';

const Preview = ({ cards }) => {
  return (
    <section class={styles.preview}>
      <h3 class={styles.title}>Preview</h3>
      <ul class={styles.cards}>
        {cards.map((card) => (
          <Card key={card.id} card={card}></Card>
        ))}
      </ul>
    </section>
  );
};

export default Preview;
