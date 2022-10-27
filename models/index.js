const {Band} = require('./Band')
const {Musician} = require('./Musician')

// TODO - create one-to-many association
Musician.belongsTo(Band);
Band.hasMany(Musician)

module.exports = {
    Band,
    Musician
};
