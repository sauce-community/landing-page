// OpenSauce
//nvariable

// Modules
const express = require('express');

//Routes
const connectionsRoute = require('./routes/integrations');

// Express
const app = express();

// Router manager
const router = express.Router();

// Use connections API
router.use("/api/v1/", connections);

// Default listening port
const port = 6969;

router.use();

// Start running the api server
module.exports = () => {
    app.listen(port, () => {
        console.log("[OPENSAUCE_BACKEND]: Application listening on https://localhost:" + port);
    })
};