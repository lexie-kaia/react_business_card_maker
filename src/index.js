// react
import React from 'react';
import ReactDOM from 'react-dom';
// style
import './index.css';
//component
import App from './app';
// firebase
import AuthService from './service/auth_service';

const authService = new AuthService();

ReactDOM.render(
  <React.StrictMode>
    <App authService={authService} />
  </React.StrictMode>,
  document.getElementById('root')
);
