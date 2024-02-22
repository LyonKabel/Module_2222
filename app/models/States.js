const mongoose = require("mongoose");

const statesSchema = new mongoose.Schema({
    name: String,
    yearMadeState: Date,
    population: Number,
    eastCoast: Boolean,
    governor: String


});

module.exports = mongoose.model("State", statesSchema);