const { Fancy } = require('../models');

const fancydata = [
    {
        fancy_name:'Boo',
        species: 'bird',
        age: '10', 
        gender: 'female',
        description: 'low key loud',
        filename: 'parrot.jpeg'
    }, 
    {
        fancy_name: 'Sonic', 
        species: 'Hedgehog', 
        age: '2', 
        gender: 'female', 
        description: 'spikey but lovely',
        filename: 'hedghog.jpeg'
    }, 
    {
        fancy_name: 'Slithering', 
        species: 'Snake', 
        age: '1', 
        gender: 'male',
        description: 'long boy',
        filename: 'snake.jpeg'
    }, 
    {
        fancy_name: 'Hops',
        species: 'Rabbit', 
        age: '6', 
        gender: 'female',
        description: 'loves cuddles',
        filename: 'bunny.jpeg'
    },
];

const seedFancy = () => Fancy.bulkCreate(fancydata);

module.exports = seedFancy;