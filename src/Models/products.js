const mongoose = require("mongoose");
const productsSchema = mongoose.Schema({
    name: {
        type: String,
        required: false
    },
    brand: {
        type: String,
        required: false
    },
    amount: {
        type: Number,
        required: false
    },
    state: {
        type: String,
        required: false
    },
    limit: {
        type: Number,
        required: false
    }
});

module.exports = mongoose.model('products', productsSchema);