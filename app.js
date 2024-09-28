const express = require('express');
const logger = require('morgan');
const cookieParser = require('cookie-parser')
const indexRouter = require('./routes/index');
const dbconnnect = require('./config/config');

const app = express();
// ME ESTOY BASANDO DE LOS PROYECTOS
//  node-express-postgresql-sequelize-master
//  Point-of-Sales-App-Restfull-master

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static("./"));


app.use('/', indexRouter);

//dbconnnect();


app.listen(5000, () => {
    console.log("Connect");
});
