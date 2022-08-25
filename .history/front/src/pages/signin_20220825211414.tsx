import type { NextPage } from 'next'

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
    // firebaseのグーグルサインイン
  }

  return (
    <button onClick={signInWithGoogle}>
      <p>サインイン</p>
    </button>
  )
}