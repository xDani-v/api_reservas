const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/db'); // Asegúrate de ajustar la ruta a tu configuración de base de datos

class Pedido extends Model { }

Pedido.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        id_reserva: {
            type: DataTypes.INTEGER,
        },
        id_menu: {
            type: DataTypes.INTEGER,
        },
        cantidad: {
            type: DataTypes.INTEGER,
        },
        subtotal: {
            type: DataTypes.NUMERIC(10, 2),
        },
        estado: {
            type: DataTypes.STRING(20),
        },
    },
    {
        sequelize,
        modelName: 'Pedido',
        tableName: 'pedidos',
        timestamps: false,
        freezeTableName: true,
    }
);

module.exports = Pedido;