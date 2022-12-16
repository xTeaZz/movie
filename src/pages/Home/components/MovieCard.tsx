import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material"
import { Link } from "react-router-dom"
import "./MovieCard.scss"

const API_IMG = "https://image.tmdb.org/t/p/w500/"

export default function MovieCard({
  title,
  poster_path,
  vote_average,
  release_date,
  overview,
  id
}: {
  title: string
  poster_path: string
  vote_average: number
  release_date: string
  overview: string
  id : string
}) {
  let img = API_IMG + poster_path
  let description = overview.substring(0, 150) + "..."
  let link = "/Movie" + id

  return (
    <div>
      <Card sx={{ maxWidth: 450 }}>
        <CardMedia component='img' height='600' image={img} />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            {title}
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            {description}
          </Typography>
        </CardContent>
        <CardActions>
          <Link to={link}>
            <Button size='small'>Learn More</Button>
          </Link>
        </CardActions>
      </Card>
    </div>
  )
}
