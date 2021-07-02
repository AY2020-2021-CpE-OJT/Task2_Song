const express = require('express'); //call express
const app = express();
const mongoose = require('mongoose'); //call mongoose

const bodyParser = require('body-parser'); // need to POST data

const db = mongoose.connection; // figure out the connection of MongoDB
db.on('error', console.error);
db.once('open', function(){
    //connected to MongoDB server
    console.log("Connected to MongoDB server");
});

mongoose.connect('mongodb+srv://daehyeon:skagnlfud0922@ojt.broz0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'); //connect to MongoDB server

//define model
const Family = require('./models/family');

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