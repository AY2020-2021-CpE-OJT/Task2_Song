const express = require('express'); //call express
const app = express();

const bodyParser = require('body-parser'); // need to POST data
const mongoose = require('mongoose'); //need to connect MongoDB

//configure app to use bodyparser
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//configure server port
const port = process.env.PORT || 3000; //to secure

//configure router
const router = require('./routes')(app)

//Run server
const server = app.listen(port, function(){
    console.log("Server is running...")
})