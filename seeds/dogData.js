
const { Dog } = require('../models');

const dogdata = [
    {
        dog_name: 'Sugar',
        species: 'Dog',
        age: '3', 
        gender: 'female',
        description: 'So fluffyyyyy', 
        filename: 'boston.jpeg',
    }, 
    {
        dog_name: 'Archer', 
        species: 'Dog', 
        age: '2', 
        gender: 'female', 
        description: 'So fluffyyyyy', 
        filename: 'golden.jpeg',
    }, 
    {
        dog_name: 'Astro', 
        species: 'Dog', 
        age: '1', 
        gender: 'male',
        description: 'So fluffyyyyy', 
        filename: 'pitpuppy.jpeg',
    }, 
    {
        dog_name: 'Hops',
        species: 'Dog', 
        age: '6', 
        gender: 'female', 
        description: 'So fluffyyyyy', 
        filename: 'kelpie.jpeg'
    },
];

const seedDog = () => Dog.bulkCreate(dogdata);

module.exports = seedDog;