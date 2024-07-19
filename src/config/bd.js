// Importar dotenv para poder usar variables de entorno desde .env
require('dotenv').config();

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.HOST,
    dialect: 'postgres',
    logging: false,
});

module.exports = sequelize;