import React from 'react';
import styles from './edit_form.module.css';
import ImageFileInput from '../image_file_input/image_file_input';
import Button from '../button/button';

const EditForm = ({ card }) => {
  const {
    name,
    company,
    title,
    email,
    message,
    avatarFileName,
    avatarFileUrl,
    theme,
  } = card;

  const onDelete = () => {};
  const onChange = () => {};

  return (
    <form className={styles.form}>
      <input
        className={styles.input}
        type="text"
        name="name"
        value={name}
        onChange={onChange}
      />
      <input
        className={styles.input}
        type="text"
        name="company"
        value={company}
        onChange={onChange}
      />
      <input
        className={styles.input}
        type="text"
        name="title"
        value={title}
        onChange={onChange}
      />
      <input
        className={styles.input}
        type="text"
        name="email"
        value={email}
        onChange={onChange}
      />
      <select
        className={styles.select}
        name="theme"
        value={theme}
        onChange={onChange}
      >
        <option value="light">Light</option>
        <option value="light">Dark</option>
        <option value="light">Colorful</option>
      </select>
      <textarea
        className={styles.textarea}
        name="message"
        value={message}
        onChange={onChange}
      ></textarea>
      <div className={styles.fileInput}>
        <ImageFileInput />
      </div>
      <div className={styles.button}>
        <Button name="Delete" onClick={onDelete} />
      </div>
    </form>
  );
};

export default EditForm;
