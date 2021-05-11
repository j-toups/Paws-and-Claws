const { Model } = require('sequelize/types');
const { Pet } = require('../models');

const fancydata = [
    {
        name: 'Boo',
        species: 'bird',
        age: '10', 
        gender: 'female',
        description: 'low key loud'
    }, 
    {
        name: 'Sonic', 
        species: 'Hedgehog', 
        age: '2', 
        gender: 'female', 
        description: 'spikey but lovely',
    }, 
    {
        name: 'Slithering', 
        species: 'Snake', 
        age: '1', 
        gender: 'male',
        description: 'long boy',
    }, 
    {
        name: 'Hops',
        species: 'Rabbit', 
        age: '6', 
        gender: 'female',
        description: 'loves cuddles',
    },
];

const seedPet = () => fancy.bulkCreate(fancydata);

module.exports = seedPet;