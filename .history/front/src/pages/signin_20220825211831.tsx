import { auth, db, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  onSnapshot,
  setDoc,
  writeBatch,
} from "firebase/firestore";

function App() {
  return (
    <div>
      <SignInButton />
    </div>
  )
}

export default App

// グーグルボタンでサインイン
function SignInButton() {
  const signInWithGoogle = {
    signInWithPopup(auth, provider);
  }

  return (
    <button onClick={signInWithGoogle}>
      <p>サインイン</p>
    </button>
  )
}