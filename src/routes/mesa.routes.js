const express = require('express');
const mesasController = require('../controllers/mesa.controller');
const router = express.Router();

router.get('/', mesasController.getAllMesas);
router.get('/:id', mesasController.getMesaById);
router.post('/', mesasController.createMesa);
router.put('/:id', mesasController.updateMesa);
router.delete('/:id', mesasController.deleteMesa);

module.exports = router;