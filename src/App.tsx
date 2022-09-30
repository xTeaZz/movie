import { Route, Routes } from "react-router-dom"
import "./App.scss"
import Home from "./pages/Home/Home"
import Login from "./pages/Login/Login"
import Profil from "./pages/Profil/Profil"

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/profil/:id' element={<Profil/>} />
      </Routes>
    </div>
  )
}

export default App
