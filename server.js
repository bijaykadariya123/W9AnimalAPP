require("dotenv").config()
const express = require("express")
const morgan = require("morgan")
const animalRoutes = require("./controllers/animalRoutes.js")
const app = express()

//middleware
app.use(express.urlencoded())// allows the req.body to be read from the form
app.use(morgan("dev"))

//Routes
app.use("/animal", animalRoutes)






app.listen(process.env.PORT, ()=>{
    console.log(` PORT ${process.env.PORT} is Running`);
})