import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";

const Signin = () => {
  return (
    <div>
      <SignInButton />
    </div>
  )
}

export default Signin

// グーグルボタンでサインイン
function SignInButton() {
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
  }

  return (
    <button onClick={signInWithGoogle}>
      <p>サインイン</p>
    </button>
  )
}