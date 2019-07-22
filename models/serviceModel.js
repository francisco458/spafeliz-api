const Sequelize = require('sequelize');
const conn = require('../database/connection');

module.exports = conn.define('services', {
    id: {type: Sequelize.SMALLINT, primaryKey: true},
    name: Sequelize.STRING,
    description: Sequelize.STRING,
    cost: Sequelize.DOUBLE,
    happy: Sequelize.BOOLEAN,
    image: Sequelize.STRING
})