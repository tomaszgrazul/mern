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
        .then((post)=>{
            res.json({ delete: true});
        })
        .catch((err) => {
            res.json({ error: 'Delete post error' });
        });
    }
};