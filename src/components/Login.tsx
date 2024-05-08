import './styles/styles.scss'

type LoginProps = {
  setHasAccount: (value: boolean) => void
}

export default function Login({ setHasAccount }: LoginProps) {
  return (
    <>
      <form className="loginForm" action="submit">
        <label className="label" htmlFor="username">
          Username
        </label>
        <input type="text" id="username" name="username" />
        <label className="label" htmlFor="password">
          Password
        </label>
        <input type="password" id="password" name="password" />
        <button className="loginbtn" type="submit">
          Login
        </button>
      </form>
      <p>Forgot your password?</p>
      <p>Don't have an account?</p>
      <button className="loginbtn" onClick={() => setHasAccount(false)}>
        Register
      </button>
    </>
  )
}
