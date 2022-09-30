import "./components/LoginButton"
import LoginButton from "./components/LoginButton"
import "./components/LoginTextField"
import LoginTextField from "./components/LoginTextField"
import "./Login.scss"
import Footer from '../../components/Footer/Footer'
import LoginHeader from "./components/LoginHeader"

function Login() {
  return (
    <div className="login">
      <LoginHeader />
      <div className='login-form'>
        <LoginTextField />
        <LoginButton />
      </div>
      <Footer />
    </div>
  )
}

export default Login
