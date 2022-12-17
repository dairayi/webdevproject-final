let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let userSchema = new Schema({
    username: String,
    favdriver: String,
    favconstructor: String,
    favcircuit: String
});
let User = mongoose.model('User', userSchema);
module.exports = User;