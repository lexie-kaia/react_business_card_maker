import React from 'react';
import EditForm from '../edit_form/edit_form';
import styles from './editor.module.css';

const Editor = ({ cards }) => {
  return (
    <section class={styles.editor}>
      <h3 class={styles.title}>Editor</h3>
      <ul>
        {cards.map((card) => (
          <EditForm key={card.id} card={card} />
        ))}
      </ul>
    </section>
  );
};

export default Editor;
