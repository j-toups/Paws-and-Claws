const { Model } = require('sequelize/types');
const { Pet } = require('../models');

const dogdata = [
    {
        name: 'Sugar',
        species: 'Dog',
        age: '3', 
        gender: 'female',
        description: 'So fluffyyyyy', 
    }, 
    {
        name: 'Archer', 
        species: 'Dog', 
        age: '2', 
        gender: 'female', 
        description: 'So fluffyyyyy', 
    }, 
    {
        name: 'Astro', 
        species: 'Dog', 
        age: '1', 
        gender: 'male',
        description: 'So fluffyyyyy', 
    }, 
    {
        name: 'Hops',
        species: 'Dog', 
        age: '6', 
        gender: 'female', 
        description: 'So fluffyyyyy', 
    },
];

const seedPet = () => Dog.bulkCreate(dogdata);

module.exports = seedPet;