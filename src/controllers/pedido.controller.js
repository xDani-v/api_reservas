const Pedido = require('../models/pedido.model');

exports.getAllPedidos = async (req, res) => {
    try {
        const pedidos = await Pedido.findAll();
        res.json(pedidos);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getPedidoById = async (req, res) => {
    try {
        const pedido = await Pedido.findByPk(req.params.id);
        if (!pedido) {
            return res.status(404).json({ error: 'Pedido not found' });
        }
        res.json(pedido);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.createPedido = async (req, res) => {
    try {
        const pedido = await Pedido.create(req.body);
        res.status(201).json(pedido);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.updatePedido = async (req, res) => {
    try {
        const pedido = await Pedido.update(req.body, {
            where: { id: req.params.id },
        });
        if (!pedido[0]) {
            return res.status(404).json({ error: 'Pedido not found' });
        }
        res.json({ message: 'Pedido updated successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.deletePedido = async (req, res) => {
    try {
        const result = await Pedido.destroy({
            where: { id: req.params.id },
        });
        if (!result) {
            return res.status(404).json({ error: 'Pedido not found' });
        }
        res.json({ message: 'Pedido deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};