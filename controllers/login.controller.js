const jwt = require('jsonwebtoken');
const setting = require('../config/config');
const Login = require('../models/login.model');

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};

exports.login = async function (req, res) {
    console.log("token",  req.body)
    Login.findOne({ contact_no: Number(req.body.contact_no)}, function (err, loginDetail) {
        
        if (err) return res.status(401).send('Login not found');
        
        if(!loginDetail) return res.status(500).send({message : 'invalid credentials'});

        if(loginDetail.password != req.body.password) return res.status(401).send({message : 'mobile no or password is wrong'});
        const token = jwt.sign({contact_no : loginDetail.contact_no, email : loginDetail.email}, setting.TOKEN_SECRET, { expiresIn: '1800s' });
        console.log("token", token, req.body, loginDetail)
        loginDetail['token'] = token;
        const response = {
            token : token,
            email : loginDetail.email,
            contact_no : loginDetail.contact_no,
            id: loginDetail._id,
            name: loginDetail.name
        }
        res.status(200).send(response);
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
 
 