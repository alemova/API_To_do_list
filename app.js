const express = require('express');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const indexRouter = require('./routes/index');
const dbconnnect = require('./config/db');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static("./"));


app.use('/', indexRouter);

dbconnnect();


app.listen(5000, () => {
    console.log("Connect");
});
