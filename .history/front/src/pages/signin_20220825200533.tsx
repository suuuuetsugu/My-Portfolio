import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import FirebaseApp from '../FirebaseApp';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default function Home() {

  const doLogin = () => {
    const auth = getAuth();

    // Firebaseに登録したID,PASSWORD
    const email = 'test@user.com';
    const password = 'XXXXXXXXXX';

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        alert( 'ログインok!' );
        console.log( '● user' );
        console.log( user );
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  }

  return (
    <div className={styles.container}>
      <h1>Googleログイン</h1>
      <button onClick={doLogin}>googleでログインする</button>
    </div>
  )
}