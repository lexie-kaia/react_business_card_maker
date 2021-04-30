import { firebaseInstance, firebaseApp } from './firebase';

class AuthService {
  login(providerName) {
    const provider = new firebaseInstance.auth[`${providerName}AuthProvider`]();
    return firebaseApp.auth().signInWithPopup(provider);
  }

  logout() {
    firebaseApp.auth().signOut();
  }

  onAuthStateChanged(onAuthStateChange) {
    firebaseApp.auth().onAuthStateChanged((user) => {
      onAuthStateChange(user);
    });
  }
}

export default AuthService;
