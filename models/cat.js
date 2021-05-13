const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Cat extends Model {}

Cat.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false, 
            primaryKey: true, 
            autoIncrement: true,
        }, 
        cat_name: {
            type: DataTypes.STRING,
            allowNull: false, 
        }, 
        age: {
            type: DataTypes.INTEGER, 
            allowNull: false, 
        }, 
        gender: {
            type: DataTypes.STRING,
            allowNull:false, 
        },
        description: {
            type: DataTypes.STRING, 
            allowNull: false
        },
        filename: {
            type: DataTypes.STRING,
            allowNull: false,
          },
    }, 
    {
        sequelize, 
        freezeTableName: true, 
        underscored:true, 
        modelName: 'cat'

    }
);
module.exports = Cat; 