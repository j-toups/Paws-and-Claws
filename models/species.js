const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

class Species extends Model {}

Species.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false, 
            primaryKey: true, 
            autoIncrement: true,
        }, 
        species_name: {
            type: DataTypes.STRING,
            allowNull: false, 
        }
    }, 
    {
        sequelize, 
        freezeTableName: true, 
        underscored:true, 
        modelName: 'species'

    }
)
module.exports = Species; 