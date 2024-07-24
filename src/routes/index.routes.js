const express = require('express');
const clientesRoutes = require('./cliente.routes');
const menusRoutes = require('./menu.routes');
const mesasRoutes = require('./mesa.routes');
const pedidosRoutes = require('./pedido.routes');
const reservasRoutes = require('./reserva.routes');
const consultasRoutes = require('./consultas.routes');

const router = express.Router();

router.use('/clientes', clientesRoutes);
router.use('/menus', menusRoutes);
router.use('/mesas', mesasRoutes);
router.use('/pedidos', pedidosRoutes);
router.use('/reservas', reservasRoutes);
router.use('/consultas', consultasRoutes);

module.exports = router;