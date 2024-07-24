const sequelize = require('../config/bd'); // Asegúrate de ajustar la ruta al archivo bd.js

async function obtenerTopClientes(req, res) {
    try {
        const [resultados, metadata] = await sequelize.query(`
            SELECT id_cliente, COUNT(*) AS total_reservas
            FROM public.reserva
            GROUP BY id_cliente
            ORDER BY total_reservas DESC
            LIMIT 4;
        `);

        // Enviar los resultados como respuesta
        res.json(resultados);
    } catch (error) {
        console.error('Error al obtener los top clientes:', error);
        res.status(500).json({ mensaje: 'Error al procesar tu solicitud' });
    }
}

async function obtenerTopMenus(req, res) {
    try {
        const [resultados, metadata] = await sequelize.query(`
            SELECT m.nombre, SUM(p.cantidad) AS total_pedidos
            FROM public.pedidos p
            JOIN public.menu m ON p.id_menu = m.id
            GROUP BY m.nombre
            ORDER BY total_pedidos DESC
            LIMIT 4;
        `);

        res.json(resultados);
    } catch (error) {
        console.error('Error al obtener los top menús:', error);
        res.status(500).json({ mensaje: 'Error al procesar tu solicitud' });
    }
}

async function obtenerTopClientesPorGasto(req, res) {
    try {
        const [resultados, metadata] = await sequelize.query(`
            SELECT r.id_cliente, SUM(r.total) AS total_gasto
            FROM public.reserva r
            GROUP BY r.id_cliente
            ORDER BY total_gasto DESC
            LIMIT 4;
        `);

        res.json(resultados);
    } catch (error) {
        console.error('Error al obtener los top clientes por gasto:', error);
        res.status(500).json({ mensaje: 'Error al procesar tu solicitud' });
    }
}

module.exports = { obtenerTopClientes, obtenerTopMenus, obtenerTopClientesPorGasto };

