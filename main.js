const express = require('express');
const app = express();
const mongoose = require('mongoose');
const User = require('./api/models/UserModel');
var cors = require('cors')


mongoose.connect('mongodb://127.0.0.1:27017/register');

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use(cors())



app.post('/add', function(req, res) {
      
    let newUser = new User(req.body);
    const lastId = req.params.id;
    res.locals.lastId = req.params.id;
        console.log("Zapis do bazy z express", res.locals.lastId);
        newUser
        .save()
        .then(() => {
            res.json(newUser);
        })
        .catch((err) => {
            return res.json({ error: 'Get user error' });
        });
});

app.post('/', function(req, res) {
    
    User
    .findById(res.locals.lastId)
    .lean()
    .then((user) => {
        res.json(user);
        console.log("Odczyt z bazy express", user);
    })
    .catch((err) => {
        res.json(posts);
    });   
});



app.listen(8080, function(){
    console.log('Serwer Register działa');
});