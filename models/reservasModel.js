const Sequelize = require('sequelize');
const conn = require('../database/connection');

module.exports = conn.define('reservas', {
    id: {type: Sequelize.SMALLINT, primaryKey: true, autoIncrement: true},
    nombre_cliente: Sequelize.STRING,
    fecha: Sequelize.TIME,
    hora: Sequelize.TIME,
    email: Sequelize.STRING,
    id_servicio: Sequelize.SMALLINT
})