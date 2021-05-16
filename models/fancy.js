const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

class Fancy extends Model {}

Fancy.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false, 
            primaryKey: true, 
            autoIncrement: true,
        }, 
        fancy_name: {
            type: DataTypes.STRING,
            allowNull: false, 
        },
        species:{
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
            allowNull: false,
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
        modelName: 'fancy'

    }
);
module.exports = Fancy; 