const Payment = require('../models/payments.model');

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send({aa : 'Greetings from the Test controller!'});
};

exports.add = async function (req, res) {
     
    const reqData = JSON.parse(JSON.stringify(req.body))
    let payment = new Payment(
        {
            deposit_type: reqData.deposit_type,
            amount: reqData.amount,
            payment_mode: reqData.payment_mode,
            book_id: reqData.book_id,
            payment_date: reqData.payment_date
        }
    );

   const paymentData = await  payment.save();
   res.send(paymentData)
};

exports.all = async function (req, res) {
     
    Users.find({}, function (err, users) {
        if (err) return res.send({message : 'Users not found'});
        if (!users) return res.send({message : 'no record found'});
        console.log("qwert", users)
        res.send(users);
    })
};

exports.product_details = function (req, res) {
    Users.find(req.params.id, function (err, product) {
        if (err) return res.send({message : 'Product not found'});
        if (!product) return res.send({message : 'invalid product id'});
        res.send(product);
    })
};

exports.product_update = function (req, res) {
    Users.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, product) {
        if (err) return res.send('Product not updated')
        res.send('Product udpated.');
    });
};

exports.product_delete = function (req, res) {
    Users.findByIdAndRemove(req.params.id, function (err) {
        if (err) return res.send('Product not deleted')
        res.send('Deleted successfully!');
    })
};