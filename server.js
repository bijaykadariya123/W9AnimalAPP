require("dotenv").config()
const express = require("express")
const morgan = require("morgan")
const animalRoutes = require("./controllers/animalRoutes.js")
const app = express()
app.use(animalRoutes)



// app.get("/", (req, res)=>{
//     res.send("Hello World")
// })
app.use(mogran("dev"))
// app.use("/", animalRoutes)



app.listen(process.env.PORT, ()=>{
    console.log(` PORT ${process.env.URL} is Running`);
})