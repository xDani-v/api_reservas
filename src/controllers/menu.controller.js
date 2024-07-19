const Menu = require('../models/menu.model');

exports.getAllMenus = async (req, res) => {
    try {
        const menus = await Menu.findAll();
        res.json(menus);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getMenuById = async (req, res) => {
    try {
        const menu = await Menu.findByPk(req.params.id);
        if (!menu) {
            return res.status(404).json({ error: 'Menu not found' });
        }
        res.json(menu);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.createMenu = async (req, res) => {
    try {
        const menu = await Menu.create(req.body);
        res.status(201).json(menu);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.updateMenu = async (req, res) => {
    try {
        const menu = await Menu.update(req.body, {
            where: { id: req.params.id },
        });
        if (!menu[0]) {
            return res.status(404).json({ error: 'Menu not found' });
        }
        res.json({ message: 'Menu updated successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.deleteMenu = async (req, res) => {
    try {
        const result = await Menu.destroy({
            where: { id: req.params.id },
        });
        if (!result) {
            return res.status(404).json({ error: 'Menu not found' });
        }
        res.json({ message: 'Menu deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};