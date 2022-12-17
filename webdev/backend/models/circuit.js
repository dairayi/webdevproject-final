let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let circuitSchema = new Schema({
    circuitId: String,
    circuitRef: String,
    name: String,
    location: String,
    country: String,
    lat: String,
    lng: String,
    alt: String,
    url: String
});

let Circuit = mongoose.model('Circuit', circuitSchema);

module.exports = Circuit;