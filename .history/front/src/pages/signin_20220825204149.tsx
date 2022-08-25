import { app } from "../firebase"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"

const router = useRouter()
const auth = getAuth(app)
const [email, setEmail] = useState("")
const [password, setPassword] = useState("")

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault()
  await createUserWithEmailAndPassword(auth, email, password)
  router.push("/")
}
const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
  setEmail(e.currentTarget.value)
}
const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
  setPassword(e.currentTarget.value)
}

<form onSubmit={handleSubmit}>
  <div>
    <InputLabel>メールアドレス</InputLabel>
    <TextField
      name="email"
      type="email"
      size="small"
      onChange={handleChangeEmail}
      css={css`
        padding-left: 12px;
      `}
    />
  </div>
  <div
    css={css`
      display: flex;
      justify-content: flex-end;
      align-items: center;
      margin-top: 16px;
    `}
  >
    <InputLabel>パスワード</InputLabel>
    <TextField
      name="password"
      type="password"
      size="small"
      onChange={handleChangePassword}
      css={css`
        padding-left: 12px;
      `}
    />
  </div>
  <div
    css={css`
      display: flex;
      justify-content: flex-end;
      margin-top: 16px;
    `}
  >
    <Button type="submit" variant="outlined">
      登録
    </Button>
  </div>
  <div
    css={css`
      display: flex;
      justify-content: flex-end;
      margin-top: 24px;
    `}
  >
    <Link href={"/login"}>
      <a>すでに登録している人はこちら</a>
    </Link>
  </div>
</form>