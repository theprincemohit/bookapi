const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let loginSchema = new Schema({
    name: {type: String, required: true, max: 100},
    contact_no: {type: Number, required: true},
    email: {type: String, required: true},
    image: {type: String},
    password: {type: String, required: true, max: 100},

});


// Export the model
module.exports = mongoose.model('Login', loginSchema);