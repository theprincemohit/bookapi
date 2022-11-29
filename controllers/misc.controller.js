const Users = require('../models/users.model');
const Books = require('../models/books.model');

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send({ aa: 'Greetings from the Test controller!' });
};

exports.newbook = async function (req, res) {
    const reqData = JSON.parse(JSON.stringify(req.body));

    let user = new Users(
        {
            name: reqData.name,
            contact_no: reqData.contact_no
        }
    );

    const userData = await user.save();

    let book = new Books(
        {
            amount: reqData.amount,
            user_id: userData._id,
            percentage: reqData.percentage,
            start_date: reqData.start_date,
            end_date: reqData.end_date,
            created_on: new Date(),
        }
    );
    const bookData = await book.save();
    res.send(bookData);
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