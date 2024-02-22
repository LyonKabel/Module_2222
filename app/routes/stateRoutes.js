const express = require("express");
const router = express.Router();
const {
    createState,
    updateState, 
    deleteState,
    getAllStates,
    getStateById
} = require("../controller/stateController");

// GET
router.get("/", getAllStates);

// POST
router.post("/", createState);

// GET BY Id
router.get("/:id", getStateById);


// PUT BY Id
router.put("/:id", updateState);

// DELETE BY Id
router.delete("/:id", deleteState);



module.exports = router;