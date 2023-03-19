const express = require("express")
const app = express()
app.use(express.json())
const {connection} = require("./db")
const {movieRouter} = require("./routes/movie.route")

app.use("/movies",movieRouter)

app.get("/",(req,res)=>{
    res.send("Welcome")
})

app.listen(4500,async()=>{
   try {
    await connection
    console.log("Connected to DB")
   } catch (error) {
    console.log("Error while connecting to db")
    console.log(error)
   }
   console.log(`Server running on port 4500`)
})