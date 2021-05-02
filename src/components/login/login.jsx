import React, { useEffect } from 'react';
import styles from './login.module.css';
import Header from '../header/header';
import Footer from '../footer/footer';
import { useHistory } from 'react-router';

const Login = ({ authService }) => {
  const history = useHistory();
  const goToMaker = (userId) => {
    history.push({
      pathname: '/maker',
      state: { userId },
    });
  };

  const onLogin = (event) => {
    authService //
      .login(event.currentTarget.textContent)
      .then((result) => goToMaker(result.user.uid));
  };

  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      user && goToMaker(user.uid);
    });
  });

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
