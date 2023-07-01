const express = require("express")
const AnimalModel = require("../models/animal.js")

const router = express.Router()

router.get("/", (req, res)=>{
    res.send("hello World")
})

module.exports= router
