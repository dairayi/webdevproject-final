let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let constructorSchema = new Schema({
    constructorId: String,
    constructorRef: String,
    name: String,
    nationality:String,
    url: String
});

let Constructor = mongoose.model('Constructor', constructorSchema);

module.exports = Constructor;