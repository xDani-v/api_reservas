const Cliente = require('../models/cliente.model');

exports.getAllClientes = async (req, res) => {
    try {
        const clientes = await Cliente.findAll();
        res.json(clientes);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getClienteById = async (req, res) => {
    try {
        const cliente = await Cliente.findByPk(req.params.id);
        if (!cliente) {
            return res.status(404).json({ error: 'Cliente not found' });
        }
        res.json(cliente);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.createCliente = async (req, res) => {
    try {
        const cliente = await Cliente.create(req.body);
        res.status(201).json(cliente);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.updateCliente = async (req, res) => {
    try {
        const cliente = await Cliente.update(req.body, {
            where: { id: req.params.id },
        });
        if (!cliente[0]) {
            return res.status(404).json({ error: 'Cliente not found' });
        }
        res.json({ message: 'Cliente updated successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.deleteCliente = async (req, res) => {
    try {
        const result = await Cliente.destroy({
            where: { id: req.params.id },
        });
        if (!result) {
            return res.status(404).json({ error: 'Cliente not found' });
        }
        res.json({ message: 'Cliente deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};