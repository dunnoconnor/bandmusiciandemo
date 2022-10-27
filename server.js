const express = require('express');
const { Band, Musician } = require('./models/index');
const seed = require('./seed');
const app = express();
// set port to 3000
const port = 3000;

app.use(express.json())
app.use(express.urlencoded({extended:true}));

seed()

app.get('/', (req,res)=>{
    res.send('hello world')
})

//get all bands
app.get('/bands', async (req,res)=>{
    const bands = await Band.findAll()
    res.json(bands)
})

//get all musicians
app.get('/musicians', async (req,res)=>{
    const musicians = await Musician.findAll()
    res.json(musicians)
})

// put 3000/bands/2/musicians/1 should add the musician with id 1 in band 2
app.put('/bands/:bandid/musicians/:musicianid', async (req,res) =>{
    const thisMusician = await Musician.update({
        bandId: req.params.bandid
    }, {
        where: {
            id: req.params.musicianid
        }
    })
    res.send(`musician ${thisMusician} updated`)
})

app.listen(port, () => {
    console.log(`App listening on Port ${port}`)
})
