
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

mongoose.connect('mongodb://admin:coders1@ds253284.mlab.com:53284/nocnekino', {useNewUrlParser: true})
    .then(()=>{console.log('jestem w bazie, badumtssss')})
    .catch(()=>{console.log('popsulysmy')});
const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Misiaczku, slucham Cie na porcie ${port}`));



