const { Model } = require('sequelize/types');
const { Pet } = require('../models');

const petdata = [
    {
        name: 'Sugar',
        species: 'Cat',
        age: '3', 
        gender: 'female',
    }, 
    {
        name: 'Archer', 
        species: 'Cat', 
        age: '2', 
        gender: 'female', 
    }, 
    {
        name: 'Astro', 
        species: 'Dog', 
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

const seedPet = () => Pet.bulkCreate(petdata);

module.exports = seedPet;