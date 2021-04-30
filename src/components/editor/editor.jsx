import React from 'react';
import styles from './editor.module.css';
import EditForm from '../edit_form/edit_form';
import AddForm from '../add_form/add_form';

const Editor = ({ cards, addCard, updateCard, deleteCard }) => {
  return (
    <section className={styles.editor}>
      <h3 className={styles.title}>Editor</h3>
      <ul>
        {Object.keys(cards).map((key) => (
          <EditForm
            key={key}
            card={cards[key]}
            updateCard={updateCard}
            deleteCard={deleteCard}
          />
        ))}
        <AddForm addCard={addCard} />
      </ul>
    </section>
  );
};

export default Editor;
