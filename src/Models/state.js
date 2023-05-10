const mongoose = require("mongoose");
const stateSchema = mongoose.Schema({
    preference: {
        type: String,
        required: false
    },
    state: {
        type: String,
        required: false
    }
});

module.exports = mongoose.model('state', stateSchema);