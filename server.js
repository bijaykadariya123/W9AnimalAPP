require("dotenv").config()
const express = require("express")
const morgan = require("morgan")
const animalRoutes = require("./controllers/animalRoutes.js")
const methodOverride = require('method-override');
const app = express()


//middleware
app.use(morgan("dev"))
app.use(express.urlencoded())// allows the req.body to be read from the form
app.use(methodOverride("_method"))

//Routes
app.use("/animal", animalRoutes)






app.listen(process.env.PORT, ()=>{
    console.log(` PORT ${process.env.PORT} is Running`);
})