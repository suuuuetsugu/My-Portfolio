import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCKC3bVdYfVDLms3NW2e8m8Zxvw1YRHsvg",
  authDomain: "my-portfolio-login.firebaseapp.com",
  projectId: "my-portfolio-login",
  storageBucket: "my-portfolio-login.appspot.com",
  messagingSenderId: "791010990159",
  appId: "1:791010990159:web:3cd0fc8d47daaabcb8b23a"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

//firestore初期化
// const db = getFirestore();

// export { auth, provider, db };

export { auth, provider };
