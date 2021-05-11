const { Model } = require('sequelize/types');
const { Pet } = require('../models');

const petdata = [
    {
        name: 'Flash Gordon',
        species: 'Cat',
        age: '6', 
        gender: 'Male',
    }, 
    {
        name: 'Bubbles', 
        species: 'Cat', 
        age: '2', 
        gender: 'female', 
    }, 
    {
        name: 'Lulu', 
        species: 'Dog', 
        age: '5', 
        gender: 'female',
    }, 
    {
        name: 'Rudy',
        species: 'Dog', 
        age: '6', 
        gender: 'female'

    },
];

const seedPet = () => Cat.bulkCreate(data);

module.exports = seedPet;