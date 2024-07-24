const express = require('express');
const Controller = require('../controllers/consultas.controller');
const router = express.Router();

router.get('/reservas', Controller.obtenerTopClientes);
router.get('/menus', Controller.obtenerTopClientesPorGasto);
router.get('/gasto', Controller.obtenerTopMenus);

module.exports = router;