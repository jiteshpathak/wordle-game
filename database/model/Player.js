const mongoose = require('mongoose');
const playerSchema = require('../schema/Player');

const playerModel = mongoose.model("players", playerSchema)

module.exports = playerModel;