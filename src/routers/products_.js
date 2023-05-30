const express = require('express');
const productsSchema = require("../Models/products")

//constructor
const router = express.Router();

//  Create user 
router.post('/products', (req, res) => {
    const product = productsSchema(req.body);
    product
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
})

// get all users
router.get('/products', (req, res) => {
    productsSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
})

// get a user
router.get('/products/:id', (req, res) => {
    const { id } = req.params;
    productsSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
})

// update
router.put('/products/:id', (req, res) => {
    const { id } = req.params;
    const { name, brand, amount, state, limit } = req.body;

    productsSchema
        .updateOne({_id: id}, { $set:{ name, brand, amount, state, limit} })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
})

// delete
router.delete('/products/:id', (req, res) => {
    const { id } = req.params;
   
    productsSchema
        .findOneAndRemove({_id: id})
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
})
 

module.exports = router