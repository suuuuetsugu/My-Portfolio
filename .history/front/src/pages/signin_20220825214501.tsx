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
const SignInButton = () => {
  const signInWithGoogle = {
    signInWithPopup(auth: any, provider: any)
  }

  return (
    <button onClick={signInWithGoogle}>
      <p>サインイン</p>
    </button>
  )
}