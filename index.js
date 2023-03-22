const express = require('express');
const app = express();
const fs = require('fs');


app.set('view engine','ejs');
app.use('/',express.static(__dirname+"/public"))

app.get('/', (req, res) => {
    res.render('index')
})

app.listen(3000,()=>{
    console.log(`PORT RUNNING ON.....${3000}`);
})