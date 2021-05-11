const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

class dog extends Model {}

Dog.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false, 
            primaryKey: true, 
            autoIncrement: true,
        }, 
        dog_name: {
            type: DataTypes.STRING,
            allowNull: false, 
        }
    }, 
    {
        sequelize, 
        freezeTableName: true, 
        underscored:true, 
        modelName: 'dog'

    }
)
module.exports = dog; 