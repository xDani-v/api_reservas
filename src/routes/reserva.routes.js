const express = require('express');
const reservasController = require('../controllers/reserva.controller');
const router = express.Router();

router.get('/', reservasController.getAllReservas);
router.get('/:id', reservasController.getReservaById);
router.post('/', reservasController.createReserva);
router.put('/:id', reservasController.updateReserva);
router.delete('/:id', reservasController.deleteReserva);

module.exports = router;