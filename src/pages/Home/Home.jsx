import axios from "axios"
import { useEffect, useState } from "react"
import { useCookies } from "react-cookie"
import { useNavigate } from "react-router-dom"
import { toast, ToastContainer } from "react-toastify"
import Footer from "../../components/Footer/Footer"
import HomeHeader from "./components/HomeHeader"
import MovieCard from "./components/MovieCard"
import Searchbar from "./components/SearchBar"
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
        } else
          toast(`Hi ${data.user}`, {
            theme: "dark",
          })
      }
    }
    verifyUser()
  }, [cookies, navigate, removeCookie])

  const logOut = () => {
    removeCookie("jwt")
    navigate("/login")
  }

  const API_URL =
    "https://api.themoviedb.org/3/movie/popular?api_key=baeafd45f28580e3ebf5629d132668db"
  const API_SEARCH =
    "https://api.themoviedb.org/3/search/movie?api_key=baeafd45f28580e3ebf5629d132668db"

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

  const searchMovie = async (e) => {
    e.preventDefault()
    console.log("Searching")
    try {
      const url = `https://api.themoviedb.org/3/search/movie?api_key=bcc4ff10c2939665232d75d8bf0ec093&query=${query}`
      const res = await fetch(url)
      const data = await res.json()
      console.log(data)
      setMovies(data.results)
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <>
      <div>
        <HomeHeader />
        <Searchbar />
        <div className='grid'>
          {movies.map((movieReq) => (
            <MovieCard key={movieReq["id"]} {...movieReq} />
          ))}
        </div>
        <Footer />
      </div>
      <ToastContainer />
    </>
  )
}
