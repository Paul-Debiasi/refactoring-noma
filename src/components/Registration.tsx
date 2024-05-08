import { ReactEventHandler } from 'react'
import './styles/styles.scss'
import { useNavigate } from 'react-router-dom'

export default function Registration() {
  const navigate = useNavigate()
  const handleRegistration = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    e.preventDefault()
    navigate('/home')
  }
  return (
    <>
      <form className="loginForm" action="submit">
        <label className="label" htmlFor="username">
          Username
        </label>
        <input type="text" id="username" name="username" />
        <label className="label" htmlFor="email">
          Email
        </label>
        <input type="text" id="email" name="email" />
        <label className="label" htmlFor="password">
          Password
        </label>
        <input type="password" id="password" name="password" />
        <button onClick={handleRegistration} className="loginbtn">
          Submit
        </button>
      </form>
    </>
  )
}
