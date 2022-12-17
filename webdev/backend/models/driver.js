let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let driverSchema = new Schema({
    driverId: Number,
    driverRef: String,
    number: Number,
    code: String,
    forename: String,
    surname: String,
    dob: Date,
    nationality: String,
    url: String
});

let Driver = mongoose.model('Driver', driverSchema);

module.exports = Driver;