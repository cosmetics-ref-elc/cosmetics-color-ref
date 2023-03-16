const express = require('express');
const path = require('path');
const logger = require('morgan');
const bodyParser = require("body-parser");

require('dotenv').config();

// Connect to db
require('./config/database');

const app = express();
app.set('trust proxy', true);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(logger('dev'));
app.use(express.json());


app.use(express.static(path.join(__dirname, 'build')));


// API ROUTES
app.use('/api/categories', require('./routes/api/categories'));
app.use('/api/products', require('./routes/api/products'));
app.use('/api/shades', require('./routes/api/shades'));

// CATCH ALL ROUTE 
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const port = process.env.PORT || 3001;

app.listen(port, function () {
    console.log(`Express app running on port ${port}`);
});