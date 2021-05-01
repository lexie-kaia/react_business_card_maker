import React, { useRef, useState } from 'react';
import styles from './add_form.module.css';
import Button from '../button/button';

const AddForm = ({ FileInput, addCard }) => {
  const formRef = useRef();
  const nameRef = useRef();
  const companyRef = useRef();
  const titleRef = useRef();
  const emailRef = useRef();
  const themeRef = useRef();
  const messageRef = useRef();

  const [file, setFile] = useState({
    name: null,
    url: null,
  });

  const onFileChange = (file) => {
    console.log(file);
    setFile({
      name: file.name,
      url: file.url,
    });
  };

  const onAddClick = (event) => {
    event.preventDefault();
    const card = {
      id: Date.now(),
      name: nameRef.current.value || '',
      company: companyRef.current.value || '',
      title: titleRef.current.value || '',
      email: emailRef.current.value || '',
      message: messageRef.current.value || '',
      avatarFileName: file.name || '',
      avatarFileUrl: file.url || '',
      theme: themeRef.current.value,
    };
    addCard(card);
    console.log(card);
    setFile({
      name: null,
      url: null,
    });
    formRef.current.reset();
  };

  return (
    <form ref={formRef} className={styles.form}>
      <input
        ref={nameRef}
        className={styles.input}
        type="text"
        name="name"
        placeholder="Name"
      />
      <input
        ref={companyRef}
        className={styles.input}
        type="text"
        name="company"
        placeholder="Company"
      />
      <input
        ref={titleRef}
        className={styles.input}
        type="text"
        name="title"
        placeholder="Title"
      />
      <input
        ref={emailRef}
        className={styles.input}
        type="text"
        name="email"
        placeholder="Email"
      />
      <select ref={themeRef} className={styles.select} name="theme">
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="colorful">Colorful</option>
      </select>
      <textarea
        ref={messageRef}
        className={styles.textarea}
        name="message"
        placeholder="Message"
      ></textarea>
      <div className={styles.fileInput}>
        <FileInput name={file.name} onFileChange={onFileChange} />
      </div>
      <div className={styles.button}>
        <Button name="Add" onClick={onAddClick} />
      </div>
    </form>
  );
};

export default AddForm;
