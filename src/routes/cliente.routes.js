const express = require('express');
const clientesController = require('../controllers/cliente.controller');
const router = express.Router();

router.get('/', clientesController.getAllClientes);
router.get('/:id', clientesController.getClienteById);
router.post('/', clientesController.createCliente);
router.put('/:id', clientesController.updateCliente);
router.delete('/:id', clientesController.deleteCliente);
router.post('/login', clientesController.loginCliente);
router.post('/acp', clientesController.actualizarContrasena);
router.post('/recuperar', clientesController.recuperar);

module.exports = router;