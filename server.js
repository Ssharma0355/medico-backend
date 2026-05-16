import express from "express"

const app = express()

app.get("/",(req, res)=>{
    res.send({
        "message":"Intial Backend"
    })
})

app.listen(8080,(req,res)=>{
   console.log("server started")
})