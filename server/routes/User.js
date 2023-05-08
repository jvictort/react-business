const express = require('express');

const router = express.Router();

const userController = require('../controllers/User');

router.post('/add', userController.add);

module.exports = router;
