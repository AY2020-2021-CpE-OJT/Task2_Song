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
const family = require('./models/family');

//configure app to use bodyparser
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//configure server port
const port = process.env.PORT || 3000; //to secure

//configure router
const router = require('./routes')(app)

// Create familys member
app.post('/api/family', (req,res)=>{
    const family = new Family();
    
    // request data
    family.name = req.body.name;
    family.age = req.body.age;
    family.position = req.body.position;

    family.save((err)=>{
        if (err){
            console.error(err);
            res.json({message : "Fail to add member"});
            return;
        } else { res.json(family); }
    });

    res.json(family);
});

//Get familys member
app.get('/api/family', (req,res) => {
    family.find((err, family)=>{
        if (err) return res.status(500).send({error : 'database failed'});
        res.json(family);
    })
});




//Run server
const server = app.listen(port, function(){
    console.log("Server is running...")
})