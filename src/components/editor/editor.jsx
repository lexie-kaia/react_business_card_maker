import React from 'react';
import styles from './editor.module.css';
import EditForm from '../edit_form/edit_form';
import AddForm from '../add_form/add_form';

const Editor = ({ cards, addCard }) => {
  return (
    <section className={styles.editor}>
      <h3 className={styles.title}>Editor</h3>
      <ul>
        {cards.map((card) => (
          <EditForm key={card.id} card={card} />
        ))}
        <AddForm addCard={addCard} />
      </ul>
    </section>
  );
};

export default Editor;
