import { formStyles } from './styles/styles'

import { FormType } from '../types/formType'

export default function Login() {
  return (
    <>
      <formStyles action="submit">
        <label htmlFor="username">Username</label>
        <input type="text" id="username" name="username" />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" />
      </formStyles>
    </>
  )
}
