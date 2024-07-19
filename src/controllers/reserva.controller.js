const Reserva = require('../models/reserva.model');

exports.getAllReservas = async (req, res) => {
    try {
        const reservas = await Reserva.findAll();
        res.json(reservas);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getReservaById = async (req, res) => {
    try {
        const reserva = await Reserva.findByPk(req.params.id);
        if (!reserva) {
            return res.status(404).json({ error: 'Reserva not found' });
        }
        res.json(reserva);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.createReserva = async (req, res) => {
    try {
        const reserva = await Reserva.create(req.body);
        res.status(201).json(reserva);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.updateReserva = async (req, res) => {
    try {
        const reserva = await Reserva.update(req.body, {
            where: { id: req.params.id },
        });
        if (!reserva[0]) {
            return res.status(404).json({ error: 'Reserva not found' });
        }
        res.json({ message: 'Reserva updated successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.deleteReserva = async (req, res) => {
    try {
        const result = await Reserva.destroy({
            where: { id: req.params.id },
        });
        if (!result) {
            return res.status(404).json({ error: 'Reserva not found' });
        }
        res.json({ message: 'Reserva deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};