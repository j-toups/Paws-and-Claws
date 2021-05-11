const { Model } = require('sequelize/types');
const { Pet } = require('../models');

const petdata = [
    {
        name: 'Flash Gordon',
        species: 'Cat',
        age: '6', 
        gender: 'Male',
        description: 'So fluffyyyyy', 
    }, 
    {
        name: 'Bubbles', 
        species: 'Cat', 
        age: '2', 
        gender: 'female', 
        description: 'So fluffyyyyy', 
    }, 
    {
        name: 'Lulu', 
        species: 'Dog', 
        age: '5', 
        gender: 'female',
        description: 'So fluffyyyyy', 
    }, 
    {
        name: 'Rudy',
        species: 'Dog', 
        age: '6', 
        gender: 'female', 
        description: 'So fluffyyyyy', 
    },
];

const seedPet = () => Cat.bulkCreate(data);

module.exports = seedPet;