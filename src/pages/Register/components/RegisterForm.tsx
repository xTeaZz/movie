import { Button, TextField } from "@mui/material"
import axios from "axios"
import { FormEvent, useEffect, useState } from "react"
import { toast, ToastContainer } from "react-toastify"
import { Link, useNavigate } from "react-router-dom"
import { useCookies } from "react-cookie";
import ".././Register.scss"
import "react-toastify/dist/ReactToastify.css"

export default function RegisterForm() {
  const [cookies] = useCookies(["cookie-name","jwt"],);
  const navigate = useNavigate()
  useEffect(() => {
    if (cookies.jwt) {
      navigate("/");
    }
  }, [cookies, navigate]);


  const [values, setValues] = useState({
    email: "",
    password: "",
  })

  const generateError = (err: any) =>
    toast.error(err, {
      position: "bottom-right",
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
        "http://localhost:4000/register",
        {
          ...values,
        },
        { withCredentials: true }
      )
      console.log(data)
      if (data) {
        if (data.errors) {
          const { email, password } = data.errors
          if (email) generateError(email)
          else if (password) generateError(password)
          else {
            navigate("/")
          }
        }
      }
    } catch (error) {}
  }

  return (
    <div>
      <form
        className='register-form'
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
        <Button variant='contained' color='success' name='submit' type='submit'>
          Submit
        </Button>
        <span>
          Already have an account ?<Link to="/login"> Login</Link>
        </span>
      </form>
      <ToastContainer />
    </div>
  )
}
