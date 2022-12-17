const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let paymentsSchema = new Schema({
   
    deposit_type : {type: String, required: true},
    amount: {type: String, required: true},
    payment_mode: {type: String, required: true},
    book_id : {type: mongoose.Schema.Types.ObjectId, ref: 'Books' , required: true},
    payment_date : {type: Date, required: true},
    created_on : {type: Date, default : new Date()}
});


// Export the model
module.exports = mongoose.model('Payments', paymentsSchema);