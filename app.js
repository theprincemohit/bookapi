const express = require('express');
const bodyParser = require('body-parser');
const users = require('./routes/users.route');
const login = require('./routes/login.route');
const books = require('./routes/books.route');
const misc = require('./routes/misc.route');
const loginController = require('./controllers/login.controller');
const app = express();
const mongoose = require('mongoose');
let dev_db_url = 'mongodb+srv://dbuser:dbpass@cluster0.rmnccmo.mongodb.net/?retryWrites=true&w=majority';
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/misc', loginController.verifyToken, misc);
app.use('/books', loginController.verifyToken, books);
app.use('/users', loginController.verifyToken, users);
app.use('/login', login);
let port = 3000;
app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});