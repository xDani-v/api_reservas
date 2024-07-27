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
        rango_horario: {
            type: DataTypes.STRING(50),
        },

    },
    {
        sequelize,
        modelName: 'Horario',
        tableName: 'horario',
        timestamps: false, // Asumiendo que tu tabla no maneja campos de timestamps como createdAt o updatedAt
        freezeTableName: true, // Esto asegura que el nombre de la tabla se mantenga exactamente como se define aquí
    }
);

module.exports = Cliente;