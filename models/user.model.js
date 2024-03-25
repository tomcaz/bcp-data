
const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    username: {
        required: true,
        type: String
    },
    password: {
        required: true,
        type: String
    },
    role: {
        required: true,
        type: String

    },
    status: {
        required: true,
        type: String

    }
})

module.exports = mongoose.model('users', dataSchema)