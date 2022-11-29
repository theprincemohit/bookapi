const Books = require('../models/books.model');


exports.book_create = async function (req, res) {
    const reqData = JSON.parse(JSON.stringify(req.body))
    let book = new Books(
        {
            amount: reqData.amount,
            user_id: reqData.user_id,
            percentage: reqData.percentage,
            start_date: reqData.start_date,
            end_date: reqData.end_date,
            created_on: new Date(),
        }
    );
    try {
        const bookData = await book.save();
        res.send(bookData);
    } catch (error) {

    }

    
};

exports.product_details = function (req, res) {
    Product.findById(req.params.id, function (err, product) {
        if (err) return res.send('Product not found');
        if (!product) return res.send('invalid product id');
        res.send(product);
    })
};

exports.product_update = function (req, res) {
    Product.findByIdAndUpdate(req.params.id, { $set: req.body }, function (err, product) {
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