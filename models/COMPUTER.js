const mongoose = require('mongoose');

//Making Schema
const computerSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
}, {
    timestamps: true,
})

const Computer = mongoose.model('Computer', computerSchema)
module.exports = Computer;