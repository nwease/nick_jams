const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();

const mongoose = require('mongoose');
require('dotenv').config();
mongoose.Promise = global.Promise;
mongoose.connect(process.env.DATABASE);

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cookieParser());

// MODELS
const {User} = require('./models/user');

// USERS
app.post('/api/users/register', (req, res) => {
    res.status(200)
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server running at ${port}`)
});