const express = require('express');
const api = require('novelcovid');
const exhbs = require('express-handlebars');

const track = api;
const hostname = '0.0.0.0';
const port = 3000;
track.countries()
.then((response)=> console.log(response))

const app = express()

app.set('view engine', 'hbs');

app.engine('hbs',exhbs(
    {
        extname: 'hbs',
        defaultView: 'home',
        layoutsDir: __dirname + '/views/layout/'
    }
));

app.get('/countries',(req,res) => {
    track.countries()
    .then((response) => {
        res.render('home', {info:response})   
    } )
})

app.listen(port,hostname, ()=>{
    console.log(`app is running at http://$(hostname):$(port)/`);
})