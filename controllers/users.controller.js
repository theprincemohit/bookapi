const Product = require('../models/users.model');

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};

exports.product_create = async function (req, res) {
    let product = new Product(
        {
            name: req.body.name,
            amount: req.body.amount,
            contact_no: req.body.contact_no
        }
    );

   const a = await  product.save();
   res.send(a)
};

exports.product_details = function (req, res) {
    Product.findById(req.params.id, function (err, product) {
        if (err) return res.send('Product not found');
        if (!product) return res.send('invalid product id');
        res.send(product);
    })
};

exports.product_update = function (req, res) {
    Product.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, product) {
        if (err) return res.send('Product not updated')
        res.send('Product udpated.');
    });
};

exports.product_delete = function (req, res) {
    Product.findByIdAndRemove(req.params.id, function (err) {
        if (err) return res.send('Product not deleted')
        res.send('Deleted successfully!');
    })
};