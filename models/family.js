//create model and Schema
const mongoose = require('mongoose'); //call mongodb
const Schema = mongoose.Schema;

const familySchema = new Schema({
    name : String,
    age : Number,
    position : String
});

module.exports('family',familySchema);