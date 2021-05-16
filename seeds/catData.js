
const { Cat } = require('../models');
console.log(Cat);
const catdata = [
    {
        cat_name: 'Flash Gordon',
        species: 'Cat',
        age: '6 Years Old', 
        gender: 'Male',
        description: 'So fluffyyyyy', 
        filename: 'tabby.jpeg'
    }, 
    {
        cat_name: 'Bubbles', 
        species: 'Cat', 
        age: '2 Years Old', 
        gender: 'Female', 
        description: 'So fluffyyyyy', 
        filename: 'orange.jpeg'
    }, 
    {
        cat_name: 'Lulu', 
        species: 'Cat', 
        age: '5 Years Old', 
        gender: 'Female',
        description: 'So fluffyyyyy', 
        filename: 'calico.jpeg'
    }, 
    {
        cat_name: 'Rudy',
        species: 'Cat', 
        age: '6 Years Old', 
        gender: 'Female', 
        description: 'So fluffyyyyy', 
        filename: 'dlh.jpeg'
    },
];

const seedCat = () => Cat.bulkCreate(catdata);

module.exports = seedCat;