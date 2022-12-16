import axios from "axios"
import { useEffect, useState } from "react"
import { useCookies } from "react-cookie"
import { useNavigate } from "react-router-dom"
import { toast, ToastContainer } from "react-toastify"
import Footer from "../../components/Footer/Footer"
import HomeHeader from "../Home/components/HomeHeader"
import Movie from "./Movie"
import "./Home.scss"

export default function Home() {
  const navigate = useNavigate()
  const [cookies, setCookie, removeCookie] = useCookies(["jwt"])
  useEffect(() => {
    const verifyUser = async () => {
      if (!cookies.jwt) {
        //navigate("/login")
      } else {
        const { data } = await axios.post(
          "http://localhost:4000",
          {},
          {
            withCredentials: true,
          }
        )
        if (!data.status) {
          removeCookie("jwt")
          navigate("/login")
        }
      }
    }
    verifyUser()
  }, [cookies, navigate, removeCookie])

  const logOut = () => {
    removeCookie("jwt")
    navigate("/login")
  }

  const API_URL =
    "https://api.themoviedb.org/3/movie/736526?api_key=baeafd45f28580e3ebf5629d132668db&language=en-US"

  const [movies, setMovies] = useState([])

  const [query, setQuery] = useState("")

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setMovies(data.results)
      })
  }, [])

  return (
    <>
      <div>
        <HomeHeader />
        <div className='grid'>
          {movies.map((movieReq) => (
            <Movie key={movieReq["id"]} {...movieReq} />
          ))}
        </div>
        <Footer />
      </div>
      <ToastContainer />
    </>
  )
}
