const mongoose = require('mongoose');

//Making Schema
const tvSchema = new mongoose.Schema({
    name: { type: String, required: true },
    size: {type: Number, required: true},
    price: { type: Number, required: true },
}, {
    timestamps: true,
})

const TV = mongoose.model('TV', tvSchema)
module.exports = TV;