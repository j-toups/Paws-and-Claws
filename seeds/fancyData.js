const { Fancy } = require('../models');

const fancydata = [
    {
        fancy_name:'Boo',
        age: '10', 
        gender: 'female',
        description: 'low key loud',
        filename: 'parrot.jpeg'
    }, 
    {
        fancy_name: 'Sonic', 
        age: '2', 
        gender: 'female', 
        description: 'spikey but lovely',
        filename: 'hedghog.jpeg'
    }, 
    {
        fancy_name: 'Slithering', 
        age: '1', 
        gender: 'male',
        description: 'long boy',
        filename: 'snake.jpeg'
    }, 
    {
        fancy_name: 'Hops',
        age: '6', 
        gender: 'female',
        description: 'loves cuddles',
        filename: 'bunny.jpeg'
    },
];

const seedFancy = () => Fancy.bulkCreate(fancydata);

module.exports = seedFancy;