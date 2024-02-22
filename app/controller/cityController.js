const Cities = require("../models/Cities");

// GET CITY
const getAllCities = async (req, res) => {
    const cities = await Cities.find({});
    res.status(200).json({
        data: cities,
        success: true,
        message: `${req.method} - request to City endpoint`
    });
}

// GET by Id CITY
const getCityById = (req, res) => {
    const {id} = req.params;
    res.status(200).json({
        id,
        success: true,
        message: `${req.method} - request to City endpoint`
    });
}

// POST
const createCity = async (req, res) => {
    const {city} = req.body;
    
    const newCity = await Cities.create(city);
    console.log('data >>>', newCity);
    res.status(200).json({
        success: true,
        message: `${req.method} - request to City endpoint`
    });
}

// UPDATE by Id
const updateCity = async (req, res) => {
    const {id} = req.params;
    const city = await Cities.findByIdAndUpdate(id,req.body,{new: true});
    res.status(200).json({
        data: city,
        success: true,
        message: `${req.method} - request to City endpoint`
    });
}

// DELETE by Id
const deleteCity = (req, res) => {
    res.status(200).json({
        success: true,
        message: `${req.method} - request to City endpoint`
    });
}

module.exports = { createCity, getAllCities, getCityById, deleteCity, updateCity}