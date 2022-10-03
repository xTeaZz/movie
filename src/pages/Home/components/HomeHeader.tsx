import "../Home.scss"
import { Button } from "@mui/material"
import { Link } from "react-router-dom"

function HomeHeader() {
  return (
    <div>
      <h1>Movie recommendation</h1>
      <Link to='/profil'>
        <Button variant="outlined" size="small">Profil</Button>
      </Link>
    </div>
  )
}

export default HomeHeader
