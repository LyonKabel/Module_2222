const express = require('express');
const router = express.Router();
const stateRoutes = require("./stateRoutes");
const cityRoutes = require("./cityRoutes");


// get
router.get("/", (req, res) => {
    res.status(200).json({success: true , message:`${req.method} - Request made`});
});


router.use("/states", stateRoutes);
router.use("/cities", cityRoutes);
module.exports = router;