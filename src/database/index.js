/* eslint-disable no-undef */
const Sequelize = require('sequelize');
const chalk = require('chalk');
const sequelize = new Sequelize(process.env.URI);

sequelize
    .authenticate()
    .then(() => {
        module.exports = sequelize;
    })
    .catch(err => {
        const red = chalk.red;
        const log = console.log;

        log(red(`[CRUD] Unable to connect to the database:`, err));
    });

module.exports = sequelize;
