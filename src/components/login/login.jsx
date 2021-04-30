import React from 'react';
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
    <section>
      <Header />
      <section>
        <h1>Login</h1>
        <ul>
          <li>
            <button type="button" onClick={onLogin}>
              Google
            </button>
          </li>
          <li>
            <button type="button" onClick={onLogin}>
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
