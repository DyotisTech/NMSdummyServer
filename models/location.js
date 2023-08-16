const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const locationSchema = new Schema({
    id: Number,
    name: String,
    uuid: String,
    code: String,
    backgroundImageURL: String,
    xcoordinate: String,
    ycoordinate: String,
    configuration: String,
});

const Location = mongoose.model('Location', locationSchema);

module.exports = Location;