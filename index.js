const open = require('open');
const API = require('./api');

open(__dirname + "/frontend/index.html");
API();