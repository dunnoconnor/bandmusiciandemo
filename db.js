const path = require('path');
const { Sequelize, Model } = require('sequelize');

// TODO - create the new sequelize connection
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './bands.sqlite',
    logging:false
})

module.exports = {
    sequelize,
    Sequelize
};
