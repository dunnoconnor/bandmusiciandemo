const path = require('path');
const { Sequelize, Model } = require('sequelize');

// TODO - create the new sequelize connection
const db = new Sequelize({
    dialect: 'sqlite',
    storage: './bands.sqlite',
    logging:false
})

module.exports = {
    db,
    Sequelize
};
