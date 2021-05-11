const { Model } = require('sequelize/types');
const { Pet } = require('../models');

const dogdata = [
    {
        name: 'Sugar',
        species: 'Dog',
        age: '3', 
        gender: 'female',
    }, 
    {
        name: 'Archer', 
        species: 'Dog', 
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
        species: 'Dog', 
        age: '6', 
        gender: 'female'

    },
];

const seedPet = () => Dog.bulkCreate(dogdata);

module.exports = seedPet;