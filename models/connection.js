const mongoose = require("mongoose")
require("dotenv").config()
mongoose.connect(process.env.URL)

mongoose.connection.on("open", ()=> {console.log("connected to mongoose");})

module.exports=mongoose