const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

class Pet extends Model {}

Pet.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false, 
            primaryKey: true, 
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false, 
        },
        species: {
            type: DataTypes.STRING,
            allowNull:false, 
        }, 
        age: {
            type: DataTypes.INTEGER, 
            allowNull: false, 
        }, 
        gender: {
            type: DataTypes.STRING,
            allowNull:false, 
        },
    },
    {
        sequelize, 
        freezeTableName:true, 
        underscored: true, 
        modelName: 'pet'
    }
)