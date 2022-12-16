import { TextField } from "@mui/material";
import React from "react";
import './SearchBar.scss'

export default function Searchbar() {

let search = ""
let API_REQUEST = "https://api.themoviedb.org/3/discover/movie?api_key=baeafd45f28580e3ebf5629d132668db&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_keywords="+ search +"&with_watch_monetization_types=flatrate"

    return (
      <div className='searchbar'>
        <TextField fullWidth label="SearchBar" id="fullWidth" />
      </div>
    )
  }