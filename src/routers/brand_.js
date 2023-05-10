const express = require('express');
const brandSchema = require("../Models/brand")

//constructor
const router = express.Router();

//  Create user 
router.post('/brand', (req, res) => {
    const brand_ = brandSchema(req.body);
    brand_
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
})

// get all users
router.get('/brand', (req, res) => {
    brandSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
})

// get a user
router.get('/brand/:id', (req, res) => {
    const { id } = req.params;
    brandSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
})

// update
router.put('/brand/:id', (req, res) => {
    const { id } = req.params;
    const { preference, brand} = req.body;

    brandSchema
        .updateOne({_id: id}, { $set:{ preference, brand} })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
})

// delete
router.delete('/brand/:id', (req, res) => {
    const { id } = req.params;
   
    brandSchema
        .findOneAndRemove({_id: id})
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
})
 

module.exports = router