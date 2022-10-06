import { Route, Routes } from "react-router-dom"
import "./App.scss"
import Home from "./pages/Home/Home"
import Login from "./pages/Login/Login"
import Profil from "./pages/Profil/Profil"
import Register from "./pages/Register/Register"

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/profil/:id' element={<Profil/>} />
        <Route path='/register' element={<Register/>} />
      </Routes>
    </div>
  )
}

export default App
