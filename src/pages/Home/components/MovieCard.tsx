import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material"
import { useState } from "react"
import "./MovieCard.scss"

const API_IMG = "https://image.tmdb.org/t/p/w500/"

export default function MovieCard({
  title,
  poster_path,
  vote_average,
  release_date,
  overview,
}: {
  title: string
  poster_path: string
  vote_average: number
  release_date: string
  overview: string
}) {

  return (
    <div>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia component='img' height='140' image='{API_IMG}poster_path' />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            {title}
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            {overview}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size='small'>Learn More</Button>
        </CardActions>
      </Card>
    </div>
  )
}
