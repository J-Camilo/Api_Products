const express = require('express');
const formsSchema = require("../Models/forms")

//constructor
const router = express.Router();

//  Create user 
router.post('/forms', (req, res) => {
    const forms = formsSchema(req.body);
    forms
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
})

// get all users
router.get('/forms', (req, res) => {
    formsSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
})

// get a user
router.get('/forms/:id', (req, res) => {
    const { id } = req.params;
    formsSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
})

// update
router.put('/forms/:id', (req, res) => {
    const { id } = req.params;
    const { preference, link, name, icon } = req.body;

    formsSchema
        .updateOne({_id: id}, { $set:{preference, link, name, icon} })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
})

// delete
router.delete('/forms/:id', (req, res) => {
    const { id } = req.params;
   
    formsSchema
        .findOneAndRemove({_id: id})
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
})
 

module.exports = router