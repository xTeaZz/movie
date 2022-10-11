const express = require ("express")
const mongoose = require ("mongoose")
const cors = require ("cors")
const authRoutes = require ("./Routes/AuthRoutes")


const app = express()

mongoose
  .connect(
    "mongodb+srv://xTeaZz:jonathan06@cluster0.n46harn.mongodb.net/?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("connected")
  })
  .catch((err) => {
    console.log(err.message)
  })

app.use(
cors({
  origin:("http:/localhost:3000"),
  method:["POST","GET"],
  credentials: true
})
)
app.use(express.json())
app.use("/",authRoutes)
