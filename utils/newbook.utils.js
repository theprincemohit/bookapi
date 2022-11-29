const user_controller = require('../controllers/users.controller');
const book_controller = require('../controllers/books.controller');

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send({ aa: 'Greetings from the Test controller!' });
};

exports.newbook = async function (req, res) {
    const reqData = JSON.parse(JSON.stringify(req.body));

    let userData = user_controller.user_create({
        body: {
            name: reqData.name,
            contact_no: reqData.contact_no
        }
    }, res

    );


    let bookData = book_controller.book_create({
        body: {
            amount: reqData.amount,
            user_id: userData.user_id,
            percentage: reqData.percentage,
            start_date: reqData.start_date,
            end_date: reqData.end_date,
        }
    }, res

    );

    //const bookData = await book.save();

    res.send(bookData)
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