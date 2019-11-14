const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const multipart = require('connect-multiparty');

const routes = require('./routes/routes');

const app = express();

let corsOptions = {
    methods: 'GET,PUT,POST,DELETE,OPTIONS',
    origin: '*',
    allowedHeaders: ['Content-Type', 'Authorization', 'access_token', 'ACCESS_TOKEN'],
    exposedHeaders: ['Content-Type', 'Authorization', 'access_token', 'ACCESS_TOKEN']
 };

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(multipart());

app.use(cors(corsOptions));
app.use(express.static(__dirname + "/public"));
app.use(routes);
app.use('/api/v1',routes);

module.exports = app;


