const express = require("express");
const app = express();
const routeHandler = require("./routes");
const morgan = require("morgan");
const bodyParser = require('body-parser');
const messages = require('../messages/messages')

const states = require('./models/States');
const cities = require('./models/Cities');

app.use(bodyParser.json());




app.use(express.json());
app.use(morgan("dev"));


app.get('/', (req, res) => {
    res.status(200).json({message: "API is running", success: true});
});

app.use('/api/v1', routeHandler);


app.get('/states/:id', async (req, res) => {
    try {
        const objectId = req.params.id;
        const object = await states.findById(objectId).select('-population');
        if (!object) {
            return res.status(404).json({ message: messages.object_not_found });
        }
        res.json(object);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: messages.internal_server_error });
    }
});

app.post('/cities', async (req, res) => {
    try {
        const state = req.body.states;
        const stateObject = await states.findById(states);
        if (!stateObject) {
            return res.status(404).json({ message: messages.object_not_found });
        }
        const newObject = new cities({ state });
        const savedObject = await newObject.save();
        res.json(savedObject);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: messages.internal_server_error });
    }
});

module.exports = app;