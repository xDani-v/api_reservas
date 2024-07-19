const express = require('express');
const menusController = require('../controllers/menu.controller');
const router = express.Router();

router.get('/', menusController.getAllMenus);
router.get('/:id', menusController.getMenuById);
router.post('/', menusController.createMenu);
router.put('/:id', menusController.updateMenu);
router.delete('/:id', menusController.deleteMenu);

module.exports = router;