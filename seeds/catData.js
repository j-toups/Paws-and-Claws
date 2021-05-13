
const { Cat } = require('../models');
console.log(Cat);
const catdata = [
    {
        cat_name: 'Flash Gordon',
        species: 'Cat',
        age: '6', 
        gender: 'Male',
        description: 'So fluffyyyyy', 
        filename: 'tabby.jpeg'
    }, 
    {
        cat_name: 'Bubbles', 
        species: 'Cat', 
        age: '2', 
        gender: 'female', 
        description: 'So fluffyyyyy', 
        filename: 'orange.jpeg'
    }, 
    {
        cat_name: 'Lulu', 
        species: 'Cat', 
        age: '5', 
        gender: 'female',
        description: 'So fluffyyyyy', 
        filename: 'calico.jpeg'
    }, 
    {
        cat_name: 'Rudy',
        species: 'Cat', 
        age: '6', 
        gender: 'female', 
        description: 'So fluffyyyyy', 
        filename: 'dlh.jpeg'
    },
];

const seedCat = () => Cat.bulkCreate(catdata);

module.exports = seedCat;