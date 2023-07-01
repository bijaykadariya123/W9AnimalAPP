const express = require("express")
const AnimalModel = require("../models/animal.js")

const router = express.Router()

router.get("/", async (req, res) => {
   const allAnimals = await AnimalModel.find({})
   res.render("index.ejs",{allAnimals}) 
})
router.get("/new", (req, res)=>{
    res.render("animal/new.ejs")
} )

module.exports= router
