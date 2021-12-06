const { Router } = require('express');
const express = require('express');

const router = express.Router();

function validateRequest() {

}

// Community discord server methods
const discordFunctions = { 
    // Analytics methods
    analytics: {
        // Returns member count as an integer
        memberCount: router.route('/discord/memberCount').get((req, res) => {
            if(req) {

            }
        })
    }
}

module.exports = {
    discord: discordFunctions
}