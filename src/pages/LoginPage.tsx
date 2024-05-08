import Login from '../components/Login'
import Registration from '../components/Registration'
import { useState } from 'react'

export default function LoginPage() {
  const [hasAccount, setHasAccount] = useState<boolean>(true)
  console.log(hasAccount)

  return (
    <div>
      {hasAccount ? <Login setHasAccount={setHasAccount} /> : <Registration />}
    </div>
  )
}
