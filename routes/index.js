const express = require('express');
const router = express.Router();

const notaController = require('../controllers/notaController');
const tagController = require('../controllers/tagController');


// Notas Router
router.get('/api/nota', notaController.list);
router.get('/api/nota/:id', notaController.getById);
router.post('/api/nota', notaController.add);
router.put('/api/nota/:id', notaController.update);
router.delete('/api/nota/:id', notaController.delete);


// Tags Router
router.get('/api/tag', tagController.list);
router.get('/api/tag/:id', tagController.getById);
router.post('/api/tag', tagController.add);
router.put('/api/tag/:id', tagController.update);
router.delete('/api/tag/:id', tagController.delete);


module.exports = router;