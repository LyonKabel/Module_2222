const mongoose = require("mongoose");

const citiesSchema = new mongoose.Schema({
    name: String,
    yearFounded: Date,
    population: Number,
    state: String,
    capital: Boolean


});

module.exports = mongoose.model("City", citiesSchema);