const router = require("express").Router()
// const store = require("../db/")

router.get("/api/notes", function(req, res){
    getNotes().then(notes => res.json(notes))
    .catch(err => res.status(500).json(err)) 
})

router.post("/api/notes", function(req, res){
    addNote(req.body).then(notes => res.json(notes))
    .catch(err => res.status(500).json(err))
})

router.delete("/api/notes/:id", function(req, res){
    removeNote(req.params.id).then(() => res.json({ok: true}))
    .catch(err => res.status(500).json(err))
})
module.exports = router