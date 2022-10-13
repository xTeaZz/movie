const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const authRoutes = require("./Routes/AuthRoutes")
const cookieParser = require("cookie-parser")

const app = express()

app.listen(4000, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Server Started Successfully.");
  }
});

mongoose
  .connect(
    "mongodb+srv://xTeaZz:jonathan06@cluster0.kgwyfaw.mongodb.net/?retryWrites=true&w=majority",
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
    origin: "http://localhost:3000",
    method: ["GET","POST"],
    credentials: true,
  })
)

app.use(cookieParser())
app.use(express.json())
app.use("/", authRoutes)
