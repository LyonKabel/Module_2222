const express = require("express");
const router = express.Router();
const {
    createCity,
    updateCity, 
    deleteCity,
    getAllCities,
    getCityById
} = require("../controller/cityController");

// GET
router.get("/", getAllCities);

// POST
router.post("/", createCity);

// GET BY Id
router.get("/:id", getCityById);


// PUT BY Id
router.put("/:id", updateCity);

// DELETE BY Id
router.delete("/:id", deleteCity);



module.exports = router;