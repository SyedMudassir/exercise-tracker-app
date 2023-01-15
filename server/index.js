const express = require("express")
const cors = require("cors")
const connectdb = require("./db")
require('dotenv').config()
const activityDataRoute = require("./Routes/activityDataRoute")
const port = process.env.PORT 
const app = express()
app.use(cors())
app.use(express.urlencoded({extended:false}))
app.use(express.json())
connectdb()
app.use("/",activityDataRoute) 



app.listen(port,()=>{
    console.log(`localhost:${port}`)
})