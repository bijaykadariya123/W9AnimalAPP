const express = require("express")
const AnimalModel = require("../models/animal.js")

const router = express.Router()

//INDEX
router.get("/", async (req, res) => {
   const allAnimals = await AnimalModel.find({})
   res.render("index.ejs",{allAnimals}) 
})

// NEW
router.get("/new", (req, res)=>{
    res.render("new.ejs")
} )

////////////////delete
router.delete('/:id', async (req, res) => {
    const id = req.params.id;
    const oneAnimal = await AnimalModel.findByIdAndDelete(id, req.body);
    res.redirect('/animal', {oneAnimal, id})
})

//update
router.put('/:id', async (req, res) => {
    const id = req.params.id;
    req.body.extinct = req.body.extinct === 'on' ? true : false;
    const oneAnimal = await AnimalModel.findByIdAndUpdate(id, req.body);
    res.redirect('/animal', {oneAnimal, id})
})


//////////////////////create
router.post('/', async (req, res) => {
    if(req.body.extinct === 'on'){
        req.body.extinct = true;
    }else {
        req.body.readyToEat = false;
    }
   const addAnimal= await AnimalModel.create(req.body);
    res.redirect('/animal', {addAnimal});
})

// Edit
router.get('/:id/edit', async (req, res) => {
    const id = req.params.id;
    const oneAnimal = await AnimalModel.findById(id);
    res.render('edit.ejs', {oneAnimal, id })
})


////////////////////show
router.get("/:id", async (req, res)=>{
    const id = req.params.id
    const oneAnimal =  await AnimalModel.findById(id)
    res.render("show.ejs", {oneAnimal, id})
})





module.exports= router
