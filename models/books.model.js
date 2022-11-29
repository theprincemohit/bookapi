const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let booksSchema = new Schema({
   
    amount: {type: Number, required: true},
    user_id : {type: mongoose.Schema.Types.ObjectId, ref: 'users' , required: true},
    percentage : {type: Number, required: true},
    start_date : {type: String, required: true},
    end_date : {type: String},
    created_on : {type: String, required: true},
});


// Export the model
module.exports = mongoose.model('Books', booksSchema);