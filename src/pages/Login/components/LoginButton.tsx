import { Button } from "@mui/material"
import { Link } from "react-router-dom"
import '../Login.scss'

function LoginButton() {
  return (
    <div className='login-button'>
        <div>
            <Button variant='contained'>Sign in</Button>
            <Button variant='contained'>Fogotten Password</Button>
        </div>
        <div>
            <Link to='/register'><Button variant='contained'>Sign up</Button></Link>
        </div>

    </div>
  )
}

export default LoginButton
