// userRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/create', userController.createUser);
router.get('/:id', userController.getUserById);

// Otras rutas relacionadas con la gestión de usuarios

module.exports = router;
