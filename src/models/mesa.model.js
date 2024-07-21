const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/bd'); // Asegúrate de que la ruta sea correcta para tu configuración

class Mesa extends Model { }

Mesa.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        numero: {
            type: DataTypes.STRING(50),
        },
        ubicacion: {
            type: DataTypes.STRING(50),
        },
        capacidad: {
            type: DataTypes.STRING(50),
        },
        estado: {
            type: DataTypes.STRING(50),
        },
    },
    {
        sequelize,
        modelName: 'Mesa',
        tableName: 'mesa',
        timestamps: false,
        freezeTableName: true,
    }
);

module.exports = Mesa;