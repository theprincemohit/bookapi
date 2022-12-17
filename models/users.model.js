const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let usersSchema = new Schema({
    name: { type: String, required: true, max: 100 },
    contact_no: { type: Number, required: true }

});


// Export the model
module.exports = mongoose.model('Users', usersSchema);