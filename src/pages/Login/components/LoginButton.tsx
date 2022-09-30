import { Button } from "@mui/material"
import '../Login.scss'

function LoginButton() {
  return (
    <div className='login-button'>
      <Button variant='contained'>Login</Button>
      <Button variant='contained'>Fogotten Password</Button>
    </div>
  )
}

export default LoginButton
