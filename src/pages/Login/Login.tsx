import Footer from "../../components/Footer/Footer"
import LoginForm from "./components/LoginForm"
import LoginHeader from "./components/LoginHeader"
import "./Login.scss"

export default function Login() {
  return (
    <div className='login'>
      <LoginHeader />
      <div className='login-form'>
        <LoginForm />
      </div>
      <Footer />
    </div>
  )
}
