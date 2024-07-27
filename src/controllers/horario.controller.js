const Horario = require('../models/Horario.model');
require('dotenv').config();

exports.getAllHorarios = async (req, res) => {
    try {
        const Horarios = await Horario.findAll();
        res.json(Horarios);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getHorarioById = async (req, res) => {
    try {
        const Horario = await Horario.findByPk(req.params.id);
        if (!Horario) {
            return res.status(404).json({ error: 'Horario not found' });
        }
        res.json(Horario);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.createHorario = async (req, res) => {
    try {
        const Horario = await Horario.create(req.body);
        res.status(201).json(Horario);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.updateHorario = async (req, res) => {
    try {
        const Horario = await Horario.update(req.body, {
            where: { id: req.params.id },
        });
        if (!Horario[0]) {
            return res.status(404).json({ error: 'Horario not found' });
        }
        res.json({ message: 'Horario updated successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.deleteHorario = async (req, res) => {
    try {
        const result = await Horario.destroy({
            where: { id: req.params.id },
        });
        if (!result) {
            return res.status(404).json({ error: 'Horario not found' });
        }
        res.json({ message: 'Horario deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};


