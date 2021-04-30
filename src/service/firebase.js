import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseInstance = firebase;

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export { firebaseInstance, firebaseApp };
