const Users = require('../models/users.model');

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send({aa : 'Greetings from the Test controller!'});
};

exports.user_create = async function (req, res) {
     
    const reqData = JSON.parse(JSON.stringify(req.body))
    let user = new Users(
        {
            name: reqData.name,
            contact_no: reqData.contact_no
        }
    );

   const a = await  user.save();
   console.log("aaaaaaaaa", a)
   res.setHeader('Content-Type', 'application/json');
   res.send(a)
};

exports.product_details = function (req, res) {
    Users.findById(req.params.id, function (err, product) {
        if (err) return res.send('Product not found');
        if (!product) return res.send('invalid product id');
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