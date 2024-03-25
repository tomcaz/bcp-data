const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    color: {
        required: true,
        type: String
    },
    lane: {
        required: true,
        type: String
    },
    paintQty: {
        required: true,
        type: Number

    }
})

module.exports = mongoose.model('paints', dataSchema)