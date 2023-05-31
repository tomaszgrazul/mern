const User = require('./api/models/UserModel');

module.exports = {
    read: (req, res) => {
    
    User.post('/', function(req, res) {
    
        User.find().lean().then((user) => {
                res.json(user);
                console.log(user);
            })
            .catch((err) => {
                res.json(posts);
                });   
            });
    },



    // main: (req, res) => {

    //     const findQuery = req.query.authorId ? { author: req.query.authorId } : {};

    //     Post.find(findQuery).populate('author').lean().then((posts)=>{
                 
    //                 res.json(posts);

    //             }).catch((err) => {
    //                 res.json({ error: 'Get posts error' });
    //                 });
    // },
    // post: (req, res) => {
    //     Post.findById(req.params.id).populate('author').lean().then((post)=>{
            
    //         res.json(post);

    //     }).catch((err) => {
    //             res.json({ error: 'Get post error' });
    //         });
    // },
    // create: (req, res) => {
    //             let newPost = new Post({...req.body, author: req.user._id});
    //     newPost.save();

    //     User.findById(req.user._id).then((user)=>{
    //         user.posts.push(newPost._id);
    //         user.save();

    //     }).catch((err) => {
    //             return res.json({ error: 'Get user error' });
    //         });

    //     res.json(newPost);
    // },
    // delete: (req, res) => {
    //     Post.findByIdAndDelete(req.params.id).then((post)=>{
    //         res.json({ delete: true});

    //     }).catch((err) => {
    //         res.json({ error: 'Delete post error' });
    //         });
    // }
};