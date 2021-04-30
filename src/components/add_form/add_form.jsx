import React, { useRef } from 'react';
import styles from './add_form.module.css';
import ImageFileInput from '../image_file_input/image_file_input';
import Button from '../button/button';

const AddForm = ({ addCard }) => {
  const formRef = useRef();
  const nameRef = useRef();
  const companyRef = useRef();
  const titleRef = useRef();
  const emailRef = useRef();
  const themeRef = useRef();
  const messageRef = useRef();

  const onAddClick = (event) => {
    event.preventDefault();
    const card = {
      id: Date.now(),
      name: nameRef.current.value || '',
      company: companyRef.current.value || '',
      title: titleRef.current.value || '',
      email: emailRef.current.value || '',
      message: messageRef.current.value || '',
      avatarFileName: '',
      avatarFileUrl: '',
      theme: themeRef.current.value,
    };
    addCard(card);
    formRef.current.reset();
  };
  const onChange = () => {};

  return (
    <form ref={formRef} className={styles.form}>
      <input
        ref={nameRef}
        className={styles.input}
        type="text"
        name="name"
        placeholder="Name"
        onChange={onChange}
      />
      <input
        ref={companyRef}
        className={styles.input}
        type="text"
        name="company"
        placeholder="Company"
        onChange={onChange}
      />
      <input
        ref={titleRef}
        className={styles.input}
        type="text"
        name="title"
        placeholder="Title"
        onChange={onChange}
      />
      <input
        ref={emailRef}
        className={styles.input}
        type="text"
        name="email"
        placeholder="Email"
        onChange={onChange}
      />
      <select
        ref={themeRef}
        className={styles.select}
        name="theme"
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
        placeholder="Message"
        onChange={onChange}
      ></textarea>
      <div className={styles.fileInput}>
        <ImageFileInput />
      </div>
      <div className={styles.button}>
        <Button name="Add" onClick={onAddClick} />
      </div>
    </form>
  );
};

export default AddForm;
