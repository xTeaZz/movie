import { Button, TextField } from "@mui/material"
import axios from "axios"
import { FormEvent, useEffect, useState } from "react"
import { useCookies } from "react-cookie"
import { Link, useNavigate } from "react-router-dom"
import { ToastContainer,toast } from "react-toastify"
import "../Login.scss"

export default function LoginForm() {
  const [cookies] = useCookies(["jwt"])
  const navigate = useNavigate()
  useEffect(() => {
    if (cookies.jwt) {
      navigate("/")
    }
  }, [cookies, navigate])

  function generateError(error: any) {
    toast.error(error, {
      position: "bottom-right",
    });
  }

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

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    try {
      const { data } = await axios.post(
        "http://localhost:4000/login",
        {
          ...values,
        },
        { withCredentials: true }
      )
      if (data) {
        if (data.errors) {
          const { email, password } = data.errors
          if (email) generateError(email)
          else if (password) generateError(password)
        }else {
          navigate("/");
        }
      }
    } catch (ex) {
      console.log(ex)
    }
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
      <ToastContainer />
    </div>
  )
}


