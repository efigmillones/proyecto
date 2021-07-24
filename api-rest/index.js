'use strict'

// require express and bodyParser
const  express = require("express");
const  bodyParser = require("body-parser");

// Import DB Connection
require("./src/conexion.js");

// create express app
const  app = express();

// define port to run express app
const  port = process.env.PORT || 3000;

// use bodyParser middleware on express app
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');

    next();
});
app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());


// Add endpoint
app.get('/', (req, res) => {
res.send("Hello World");
});

// Listen to server
app.listen(port, () => {

console.log(`Server running at http://localhost:${port}`);
});


// Import API route
var routes = require('./src/todoRouters'); //importing route
routes(app);

