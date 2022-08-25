import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";
// import { useAuthState } from "react-firebase-hooks";

const Signin = () => {
  const [user] = useAuthState(auth);
  return (
    <div>
      {user ? (
        <>
        <UserInfo />
        <SignOutButton />
        </>
      ) : (
        <SignInButton />
      )}
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

// グーグルボタンでサインアウト
function SignOutButton() {
  return (
    <button onClick={() => auth.signOut()}>
      <p>サインアウト</p>
    </button>
  )
}

// 
function UserInfo() {
  return (
      <p>ユーザー情報</p>
  )
}

function useAuthState(auth: Auth): [any] {
  throw new Error("Function not implemented.");
}
