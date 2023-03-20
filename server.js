const express = require("express")
const app = express()
app.use(express.json())

app.get("/",(req,res)=>{
    res.send("Welcome to server 1.0")
})

app.listen(4500,()=>{
   console.log(`Server running on port 4500`)
})
