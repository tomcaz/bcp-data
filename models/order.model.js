const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    id: {
        required: true,
        type: String
    }, address: {
        required: true,
        type: String
    }, createdBy: {
        required: true,
        type: String
    }, createdAt: {
        required: true,
        type: String
    }, paint: {
        required: true,
        type: String
    }, amount: {
        required: true,
        type: Number
    }, status: {
        required: true,
        type: String
    }
})

module.exports = mongoose.model('orders', dataSchema)