const express = require('express');
const horarioController = require('../controllers/horario.controller');
const router = express.Router();

router.get('/', horarioController.getAllHorarios);
router.get('/:id', horarioController.getHorarioById);
router.post('/', horarioController.createHorario);
router.put('/:id', horarioController.updateHorario);
router.delete('/:id', horarioController.deleteHorario);

module.exports = router;