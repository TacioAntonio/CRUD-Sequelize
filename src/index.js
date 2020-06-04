/* eslint-disable no-undef */
require('dotenv').config();
const express    = require('express');
const app        = express();
const port       = process.env.APP_PORT || 2000;
const bodyParser = require('body-parser');
const chalk      = require('chalk');
const router     = require('./router');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/', router);

app.listen(port, () => {
    const green = chalk.green;
    const log   = console.log;

    log(green(`[CRUD] Connected to the port ${port}.`));
});

module.exports = app;
