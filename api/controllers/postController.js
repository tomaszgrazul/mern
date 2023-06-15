const User = require('../models/UserModel');


module.exports = {
  
    add: (req, res) => {
           
        let newUser = new User(req.body);
        
        newUser
        .save()
        .then(() => {
            res.json(newUser);
        })
        .catch((err) => {
            return res.json({ error: 'Get user error' });
        });   
    },

    del: (req, res) => {

        User.
        findByIdAndDelete(req.body.id)
        .then(()=>{
            res.json({ delete: true});
        })
        .catch((err) => {
            res.json({ error: 'Delete post error' });
        });
    },

    read: (req, res) => {

        User
        .findById(req.body.id)
        .lean()
        .then((user) => {
            res.json(user);
        })
        .catch((err) => {
            res.json({ error: 'Read post error' });
        }); 
    }
};