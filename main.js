const express = require('express');
const app = express();
const mongoose = require('mongoose');
const User = require('./api/models/UserModel');


mongoose.connect('mongodb://127.0.0.1:27017/register');

app.use(express.urlencoded({ extended: true }));

app.use(express.json());


app.post('/', function(req, res) {
    
        User.find().lean().then((user) => {
            res.json(user);
            console.log(user);
}).catch((err) => {
    res.json(posts);
    });   
});


app.listen(8080, function(){
    console.log('Serwer Register działa');
});