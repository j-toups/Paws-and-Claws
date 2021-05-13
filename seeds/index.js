const sequelize = require('../config/connection');
const seedCat = require('./catData');
const seedDog = require('./dogData');
const seedFancy = require('./fancyData');
// const speciesdata = require('./speciesData');



const seedAll = async () => {
    await sequelize.sync({ force: true });
  
    await seedCat();
  
    await seedDog();

    await seedFancy();

    // await speciesdata();
  
    process.exit(0);
  };
  
  seedAll();