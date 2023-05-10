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
        type: String,
        required: false
    },
    state: {
        type: String,
        required: false
    }
});

module.exports = mongoose.model('products', productsSchema);