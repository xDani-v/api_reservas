const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/bd'); // Asegúrate de que la ruta sea correcta para tu configuración

class Menu extends Model { }

Menu.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true, // Asegúrate de que tu secuencia en PostgreSQL esté configurada correctamente
        },
        nombre: {
            type: DataTypes.STRING(50),
        },
        descripcion: {
            type: DataTypes.STRING(100),
        },
        precio: {
            type: DataTypes.DECIMAL(10, 2),
        },
        categoria: {
            type: DataTypes.STRING(50),
        },
        estado: {
            type: DataTypes.STRING(20),
        },
        img: {
            type: DataTypes.STRING(100),
        },
    },
    {
        sequelize,
        modelName: 'Menu',
        tableName: 'menu',
        timestamps: false, // Asumiendo que tu tabla no maneja campos de timestamps como createdAt o updatedAt
        freezeTableName: true, // Esto asegura que el nombre de la tabla se mantenga exactamente como se define aquí
    }
);

module.exports = Menu;