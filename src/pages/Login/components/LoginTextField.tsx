import { TextField } from "@mui/material"
import "../Login.scss"

function LoginTextField() {
  return (
    <div className="login-text">
      <TextField id='outlined-basic' label='ID' variant='outlined' />
      <TextField id='outlined-basic' label='Password' variant='outlined' />
    </div>
  )
}

export default LoginTextField
