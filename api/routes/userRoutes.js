const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');


router.post('/add', postController.add);

router.post('/del', postController.del);

router.post('/read', postController.read);

module.exports = router;
