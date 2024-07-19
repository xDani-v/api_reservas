const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/bd'); // Asegúrate de que la ruta sea correcta para tu configuración

class Cliente extends Model { }

Cliente.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true, // Asegúrate de que tu secuencia en PostgreSQL esté configurada correctamente
        },
        cedula: {
            type: DataTypes.STRING(50),
        },
        nombre: {
            type: DataTypes.STRING(50),
        },
        apellido: {
            type: DataTypes.STRING(50),
        },
        correo: {
            type: DataTypes.STRING(50),
        },
        direccion: {
            type: DataTypes.STRING(100),
        },
        password: {
            type: DataTypes.STRING(50),
        },
        estado: {
            type: DataTypes.STRING(20),
        },
        tipo: {
            type: DataTypes.STRING(20),
        },
    },
    {
        sequelize,
        modelName: 'Cliente',
        tableName: 'cliente',
        timestamps: false, // Asumiendo que tu tabla no maneja campos de timestamps como createdAt o updatedAt
        freezeTableName: true, // Esto asegura que el nombre de la tabla se mantenga exactamente como se define aquí
    }
);

module.exports = Cliente;