import { Button, TextField } from "@mui/material"
import axios from "axios"
import { FormEvent, useState } from "react"
import ".././Register.scss"

export default function RegisterForm() {
  const [values, setValues] = useState({
    email: "",
    password: "",
  })

  const generateError = (err) =>

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
      </form>
    </div>
  )
}
