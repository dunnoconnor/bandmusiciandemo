const express = require('express');
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

app.listen(port, () => {
    console.log(`App listening on Port ${port}`)
})
