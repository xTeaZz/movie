import "./HomeHeader.scss"
import { Button } from "@mui/material"
import { Link } from "react-router-dom"

export default function HomeHeader() {
  return (
    <div className="home-header">
      <h1>Movie recommendation</h1>
      <Link to='/profil'  className="profil-button">
        <Button variant="outlined" size="small">Profil</Button>
      </Link>
    </div>
  )
}
