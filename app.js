const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');

const downloadAPI = require('./components/download/downloadAPI')

const app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//Modules API's
app.use('/download', downloadAPI);

const errorHandler = (err, req, res, next) => {
    if (err instanceof AppError) {
        const response = {code: err.httpCode, message: err.description}
        return res.status(err.httpCode).send(response);
    }
    res.sendStatus(500);
}
app.use(errorHandler)


module.exports = app;
