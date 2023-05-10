const mongoose = require("mongoose");
const brandSchema = mongoose.Schema({
    preference: {
        type: String,
        required: false
    },
    brand: {
        type: String,
        required: false
    }
});

module.exports = mongoose.model('brand', brandSchema);