const User = require('./User');
const Pet = require('./Pet');
const Species = require('./Species');

Species.hasMany(Pet, {
  foreignKey: 'species_id',
});

Pet.belongsTo(Species, {
  foreignKey: 'species_id',
});

module.exports = { User, Pet, Species };
