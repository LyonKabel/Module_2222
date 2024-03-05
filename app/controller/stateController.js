const States = require("../models/States");



const getAllStates = async (req, res) => {
    
    const { name, yearMadeState, population } = req.query;

    
    const filter = {};

    
    if (name) {
    
        filter.name = { $regex: name, $options: 'i' };
    }

    
    if (yearMadeState) {
        
        filter.yearMadeState = yearMadeState;
    }

    if (population) {
        
        filter.population = population;
    }
    

    // Query the database with the constructed filter
    try {
        const states = await States.find(filter);

        // Return the filtered states in the response
        res.status(200).json({
            data: states,
            success: true,
            message: `${req.method} - request to State endpoint with filters: ${JSON.stringify(filter)}`
        });
    } catch (error) {
        // Handle errors
        console.error('Error fetching states:', error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
};


// GET by Id STATE
const getStateById = (req, res) => {
    const {id} = req.params;
    const data = req.body;
    res.json(data);
    res.status(200).json({
        id,
        success: true,
        message: `${req.method} - request to State endpoint`,
       
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