const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/bd'); // Ajusta la ruta a tu configuración de base de datos

class Reserva extends Model { }

Reserva.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        id_cliente: {
            type: DataTypes.INTEGER,
        },
        id_mesa: {
            type: DataTypes.INTEGER,
        },
        fecha_reserva: {
            type: DataTypes.DATEONLY,
        },
        id_horario: {
            type: DataTypes.INTEGER,
        },
        numero_personas: {
            type: DataTypes.INTEGER,
        },
        estado: {
            type: DataTypes.STRING(20),
        },
        total: {
            type: DataTypes.NUMERIC(10, 2),
        },
    },
    {
        sequelize,
        modelName: 'Reserva',
        tableName: 'reserva',
        timestamps: false,
        freezeTableName: true,
    }
);

module.exports = Reserva;