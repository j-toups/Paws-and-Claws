const { Model } = require('sequelize/types');
const { Pet } = require('../models');

const catdata = [
    {
        name: 'Flash Gordon',
        species: 'Cat',
        age: '6', 
        gender: 'Male',
        description: 'So fluffyyyyy', 
        filename: 'tabby.jpeg'
    }, 
    {
        name: 'Bubbles', 
        species: 'Cat', 
        age: '2', 
        gender: 'female', 
        description: 'So fluffyyyyy', 
        filename: 'orange.jpeg'
    }, 
    {
        name: 'Lulu', 
        species: 'Cat', 
        age: '5', 
        gender: 'female',
        description: 'So fluffyyyyy', 
        filename: 'calico.jpeg'
    }, 
    {
        name: 'Rudy',
        species: 'Cat', 
        age: '6', 
        gender: 'female', 
        description: 'So fluffyyyyy', 
        filename: 'dlh.jpeg'
    },
];

const seedPet = () => Cat.bulkCreate(data);

module.exports = seedPet;