const States = require("../models/States");





// GET STATE
const getAllStates = async (req, res) => {
    const states = await States.find({});
    res.status(200).json({
        data: states,
        success: true,
        message: `${req.method} - request to State endpoint`
    });
}

// GET by Id STATE
const getStateById = (req, res) => {
    const {id} = req.params;
    res.status(200).json({
        id,
        success: true,
        message: `${req.method} - request to State endpoint`
    });
}

// POST STATE
const createState = async (req, res) => {
    const {state} = req.body;
    
    const newState = await States.create(state);
    console.log('data >>>', newState);
    res.status(200).json({
        success: true,
        message: `${req.method} - request to State endpoint`
    });
}

// UPDATE by Id STATE
const updateState = async (req, res) => {
    const {id} = req.params;
    const state = await States.findByIdAndUpdate(id,req.body,{new: true});
    res.status(200).json({
        data: state,
        success: true,
        message: `${req.method} - request to State endpoint`
    });
}

// DELETE by Id STATE
const deleteState = (req, res) => {
    res.status(200).json({
        success: true,
        message: `${req.method} - request to State endpoint`
    });
}



module.exports = { createState, getAllStates, getStateById, deleteState, updateState}