const express = require('express');
const stateSchema = require("../Models/state")

//constructor
const router = express.Router();

//  Create user 
router.post('/state', (req, res) => {
    const states = stateSchema(req.body);
    states
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
})

// get all users
router.get('/state', (req, res) => {
    stateSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
})

// get a user
router.get('/state/:id', (req, res) => {
    const { id } = req.params;
    stateSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
})

// update
router.put('/state/:id', (req, res) => {
    const { id } = req.params;
    const { preference, state } = req.body;

    stateSchema
        .updateOne({_id: id}, { $set:{ preference, state} })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
})

// delete
router.delete('/state/:id', (req, res) => {
    const { id } = req.params;
   
    stateSchema
        .findOneAndRemove({_id: id})
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
})
 

module.exports = router