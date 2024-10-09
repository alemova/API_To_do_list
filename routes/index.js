const express = require('express');
const router = express.Router();

const middleware = require("../auth/middleware");

const notaController = require('../controllers/notaController');
const tagController = require('../controllers/tagController');
const userController = require('../controllers/userController');


// Notas Router
router.get('/api/nota', middleware.verifyToken, notaController.list);
router.get('/api/nota/:id', middleware.verifyToken, notaController.getById);
router.post('/api/nota', middleware.verifyToken, notaController.add);
router.put('/api/nota/:id', middleware.verifyToken, notaController.update);
router.delete('/api/nota/:id', middleware.verifyToken, notaController.delete);


// Tags Router
router.get('/api/tag', middleware.verifyToken, tagController.list);
router.get('/api/tag/:id', middleware.verifyToken, tagController.getById);
router.post('/api/tag', middleware.verifyToken, tagController.add);
router.put('/api/tag/:id', middleware.verifyToken, tagController.update);
router.delete('/api/tag/:id', middleware.verifyToken, tagController.delete);

// Users Router
router.get('/api/user', middleware.verifyToken, userController.listUsers);
router.get('/api/user/:id', middleware.verifyToken, userController.getById);
router.put('/api/user/:id', middleware.verifyToken, userController.update);
router.delete('/api/user/:id', middleware.verifyToken, userController.delete);

// Authentication
router.post('/api/login', userController.login);
router.post('/api/register', userController.register);


module.exports = router;