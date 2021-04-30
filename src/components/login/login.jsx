import React from 'react';
import styles from './login.module.css';
import Header from '../header/header';
import Footer from '../footer/footer';

const Login = ({ authService }) => {
  const onLogin = (event) => {
    console.log(event.currentTarget.textContent);
    authService //
      .login(event.currentTarget.textContent)
      .then(console.log);
  };
  return (
    <section className={styles.login}>
      <Header />
      <section>
        <h2>Login</h2>
        <ul className={styles.list}>
          <li className={styles.item}>
            <button className={styles.button} type="button" onClick={onLogin}>
              Google
            </button>
          </li>
          <li className={styles.item}>
            <button className={styles.button} type="button" onClick={onLogin}>
              Github
            </button>
          </li>
        </ul>
      </section>
      <Footer />
    </section>
  );
};

export default Login;
