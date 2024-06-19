const express = require('express');
const router = express.Router();
const userController = require('../controllers/user');

router.get('/users', userController.getAllUsers);
router.get('/users/:id', userController.getUserById);

router.get('test_user',userController.index);
module.exports = router;