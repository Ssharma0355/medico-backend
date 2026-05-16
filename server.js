import express from "express"
import cors from "cors"
import "dotenv/config"


// App Config
const app = express()
const port = process.env.PORT || 8080

// Middleware

app.use(express.json()) //paresed by this method
app.use(cors()) // frontend connet with backend


// Api EndPoints
app.get("/",(req, res)=>{
    res.send({
        "message":"Intial Backend"
    })
})

app.get("/doctors",(req,res)=>{
    res.send({"Doctors":"Dr. Sachin"})
})

app.listen(port,()=>{
   console.log("Server started at ",port)
})