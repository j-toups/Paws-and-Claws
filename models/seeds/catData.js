const { Model } = require('sequelize/types');
const { Cat } = require('../models');

const catdata = [
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
        species: 'Cat', 
        age: '5', 
        gender: 'female',
        description: 'So fluffyyyyy', 
    }, 
    {
        name: 'Rudy',
        species: 'Cat', 
        age: '6', 
        gender: 'female', 
        description: 'So fluffyyyyy', 
    },
];

const seedCat = () => Cat.bulkCreate(catdata);

module.exports = seedCat;