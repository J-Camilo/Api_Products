const mongoose = require("mongoose");
const productsSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    amount: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: false
    },
    limit: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('products', productsSchema);