//import dependencies
const path = require('path') //helps us find our file easily
const fs = require('fs').promises //helps us get access to promises when dealing with seeding data into our database

//import our database [x]
//import the model that we are trying to import our data into [x]
const {sequelize} = require('./db')
const { Musician, Band } = require('./models/index')


//write our seed function -> take our json file, create rows with our data into it
const seed = async () => {

    await sequelize.sync({ force: true }); // clear out database + tables

    const musicianSeedPath = path.join(__dirname, 'musicians.json'); //get the path to Musician.json file
    const bandSeedPath = path.join(__dirname, 'bands.json')


    const buffer = await fs.readFile(musicianSeedPath); //asynchronously reads the content in this file
    const bandBuffer = await fs.readFile(bandSeedPath);

    const {musiciansData} = JSON.parse(String(buffer)); // First we convert the data from buffer into a string, then we parse the JSON so it converts from string -> object
    const {bandsData} = JSON.parse(String(bandBuffer));

    const MusicianPromises = musiciansData.map(musician => Musician.create(musician)); //creates Musician and puts it into our Musician table
    const BandPromises = bandsData.map(band => Band.create(band));

    await Promise.all(MusicianPromises); // The Promise.all() method takes an iterable of promises as an input, and returns a single Promise that resolves to an array of the results of the input promises.
    await Promise.all(BandPromises)

    console.log("Musicians and Band database info populated!")
}

//export my seed function
module.exports = seed;
