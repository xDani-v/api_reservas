const Mesa = require('../models/mesa.model');

exports.getAllMesas = async (req, res) => {
    try {
        const mesas = await Mesa.findAll();
        res.json(mesas);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getMesaById = async (req, res) => {
    try {
        const mesa = await Mesa.findByPk(req.params.id);
        if (!mesa) {
            return res.status(404).json({ error: 'Mesa not found' });
        }
        res.json(mesa);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.createMesa = async (req, res) => {
    try {
        const mesa = await Mesa.create(req.body);
        res.status(201).json(mesa);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.updateMesa = async (req, res) => {
    try {
        const mesa = await Mesa.update(req.body, {
            where: { id: req.params.id },
        });
        if (!mesa[0]) {
            return res.status(404).json({ error: 'Mesa not found' });
        }
        res.json({ message: 'Mesa updated successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.deleteMesa = async (req, res) => {
    try {
        const result = await Mesa.destroy({
            where: { id: req.params.id },
        });
        if (!result) {
            return res.status(404).json({ error: 'Mesa not found' });
        }
        res.json({ message: 'Mesa deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};