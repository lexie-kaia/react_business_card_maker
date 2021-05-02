// react
import React from 'react';
import ReactDOM from 'react-dom';
// style
import './index.css';
//component
import App from './app';
import ImageFileInput from './components/image_file_input/image_file_input';
// firebase
import AuthService from './service/auth_service';
import ImageUploader from './service/image_uploader';
import CardRepository from './service/card_repository';

const authService = new AuthService();
const imageUploader = new ImageUploader();
const FileInput = (props) => (
  <ImageFileInput {...props} imageUploader={imageUploader} />
);
const cardRepository = new CardRepository();

ReactDOM.render(
  <React.StrictMode>
    <App
      FileInput={FileInput}
      authService={authService}
      cardRepository={cardRepository}
    />
  </React.StrictMode>,
  document.getElementById('root')
);
