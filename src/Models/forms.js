const mongoose = require("mongoose");
const formsSchema = mongoose.Schema({
    preference: {
        type: String,
        required: false
    },
    link: {
        type: String,
        required: false 
    },
    name: {
        type: String,
        require: false
    },
    icon: {
        type: String,
        require: false
    }
});

module.exports = mongoose.model('forms', formsSchema);