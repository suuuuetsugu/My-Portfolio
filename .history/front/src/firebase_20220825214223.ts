import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAID6CO1Drr4lBPsBT77i5eASkTWmSQHJs",
  authDomain: "my-portfolio-login-673b1.firebaseapp.com",
  projectId: "my-portfolio-login-673b1",
  storageBucket: "my-portfolio-login-673b1.appspot.com",
  messagingSenderId: "32533237773",
  appId: "1:32533237773:web:71632a551d9af99698c544"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

//firestore初期化
// const db = getFirestore();

// export { auth, provider, db };

export { auth, provider };
