const mongoose = require('mongoose');

const playerSchema = mongoose.Schema({
    id : String,
    name: String,
    wins: Number,
    attempts: Number,
})

module.exports = playerSchema;