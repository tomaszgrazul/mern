const mongoose = require('mongoose');

const User = new mongoose.Schema({
    _id: String,
    name: String,
    event: String,
    city: String
}, {
    timestamps: true
})
 
module.exports = mongoose.model('User', User)