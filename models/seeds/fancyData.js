const { Model } = require('sequelize/types');
const { Pet } = require('../models');

const fancydata = [
    {
        name: 'Boo',
        species: 'bird',
        age: '10', 
        gender: 'female',
    }, 
    {
        name: 'Sonic', 
        species: 'Hedgehog', 
        age: '2', 
        gender: 'female', 
    }, 
    {
        name: 'Slithering', 
        species: 'Snake', 
        age: '1', 
        gender: 'male',
    }, 
    {
        name: 'Hops',
        species: 'Rabbit', 
        age: '6', 
        gender: 'female'

    },
];

const seedPet = () => fancy.bulkCreate(fancydata);

module.exports = seedPet;