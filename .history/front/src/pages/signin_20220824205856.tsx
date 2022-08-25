import { SignInForm } from '../components/SignInForm'
import type { NextPage } from 'next'

const SignInPage: NextPage = () => {
  return (
    <div style={{ margin: '1rem' }}>
      <h2>サインイン</h2>
      <SignInForm />
    </div>
  )
}

export default SignInPage