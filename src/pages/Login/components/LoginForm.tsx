import { Button, TextField } from "@mui/material"
import { FormEvent, useState } from "react"
import { Link } from "react-router-dom"
import "../Login.scss"

export default function LoginForm() {
  const [values, setValues] = useState({
    email: "",
    password: "",
  })

  function handleChange(e: { target: { value: any; name: any } }) {
    const value = e.target.value
    setValues({
      ...values,
      [e.target.name]: value,
    })
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
  }

  return (
    <div className=''>
      <h1 className='login-text'>Login</h1>
      <form
        className='login-form'
        onSubmit={(e) => {
          handleSubmit(e)
        }}
      >
        <TextField
          id='outlined-basic'
          value={values.email}
          name='email'
          label='Email'
          type='email'
          variant='outlined'
          onChange={handleChange}
        />
        <TextField
          id='outlined-password-input'
          value={values.password}
          name='password'
          label='Password'
          type='password'
          autoComplete='current-password'
          onChange={handleChange}
        />
        <div className='login-button'>
          <Button variant='contained' name='submit' type='submit'>
            Sign in
          </Button>
          <Link to='/register'>
            <Button variant='contained'>Sign up</Button>
          </Link>
        </div>
      </form>
    </div>
  )
}
