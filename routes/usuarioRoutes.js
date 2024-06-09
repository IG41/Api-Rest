const express = require('express');
const router = express.Router();
const userController = require('../userController');

router.post('/', userController.cadastrarUsuario);

module.exports = router;
