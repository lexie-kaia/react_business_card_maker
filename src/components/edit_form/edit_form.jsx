import React, { useRef } from 'react';
import styles from './edit_form.module.css';
import Button from '../button/button';

const EditForm = ({ FileInput, card, updateCard, deleteCard }) => {
  const { name, company, title, email, message, avatarFileName, theme } = card;

  const formRef = useRef();
  const nameRef = useRef();
  const companyRef = useRef();
  const titleRef = useRef();
  const emailRef = useRef();
  const themeRef = useRef();
  const messageRef = useRef();

  const onChange = (event) => {
    if (event.currentTarget == null) {
      return;
    }
    event.preventDefault();
    updateCard({
      ...card,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  const onFileChange = (file) => {
    updateCard({
      ...card,
      avatarFileName: file.name,
      avatarFileUrl: file.url,
    });
  };

  const onDeleteClick = (event) => {
    deleteCard(card);
  };

  return (
    <form ref={formRef} className={styles.form}>
      <input
        ref={nameRef}
        className={styles.input}
        type="text"
        name="name"
        value={name}
        onChange={onChange}
      />
      <input
        ref={companyRef}
        className={styles.input}
        type="text"
        name="company"
        value={company}
        onChange={onChange}
      />
      <input
        ref={titleRef}
        className={styles.input}
        type="text"
        name="title"
        value={title}
        onChange={onChange}
      />
      <input
        ref={emailRef}
        className={styles.input}
        type="text"
        name="email"
        value={email}
        onChange={onChange}
      />
      <select
        ref={themeRef}
        className={styles.select}
        name="theme"
        value={theme}
        onChange={onChange}
      >
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="colorful">Colorful</option>
      </select>
      <textarea
        ref={messageRef}
        className={styles.textarea}
        name="message"
        value={message}
        onChange={onChange}
      ></textarea>
      <div className={styles.fileInput}>
        <FileInput name={avatarFileName} onFileChange={onFileChange} />
      </div>
      <div className={styles.button}>
        <Button name="Delete" onClick={onDeleteClick} />
      </div>
    </form>
  );
};

export default EditForm;
