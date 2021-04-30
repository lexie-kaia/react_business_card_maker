import { firebaseInstance, firebaseApp } from './firebase';

class AuthService {
  login(providerName) {
    const provider = new firebaseInstance.auth[`${providerName}AuthProvider`]();
    return firebaseApp.auth().signInWithPopup(provider);
  }
}

export default AuthService;
