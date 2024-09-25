const express = require("express")
const testRoutes = require("./routes/testRoute")

const app = express()
app.use(express.json())

app.use((req,res,next)=>{
    console.log(req.path, req.method)
    next()
})

//routes
app.use("/api/test",testRoutes)

app.listen("3002",()=>{
    console.log("connected")
})