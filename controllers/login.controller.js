const jwt = require('jsonwebtoken');
const setting = require('../config/config');
const Login = require('../models/login.model');

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};

exports.login = async function (req, res) {
     
    Login.findOne({email : req.body.email}, function (err, loginDetail) {
        if (err) return res.send('Login not found');
        const token = jwt.sign({email : req.body.email}, setting.TOKEN_SECRET, { expiresIn: '1800s' });
        console.log("token", token)
        loginDetail['token'] = token;
        const response = {
            token : token,
            email : loginDetail.email,
            contact_no : loginDetail.contact_no,
            id: loginDetail._id,
            name: loginDetail.name
        }
        res.send(response);
    })
};

exports.verifyToken =  function (req, res, next) {
     
    const token = req.header("auth-token");
    if(!token) return res.status(401).send("access Denied");

    try {
            const verified = jwt.verify(token, setting.TOKEN_SECRET);
            req.user = verified;
            next();
    }
    catch(err) {
            res.status(400).send("Invalid Token");
    }
     
};
 
 