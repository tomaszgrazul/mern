const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');


router.post('/add', postController.add);

router.post('/del', postController.del);

module.exports = router;
