const Cliente = require('../models/cliente.model');
require('dotenv').config();

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

exports.loginCliente = async (req, res) => {
    try {
        const { email, password } = req.body;
        const cliente = await Cliente.findOne({
            where: { correo: email },
        });
        if (!cliente) {
            return res.status(404).json({ error: 'Cliente not found' });
        }
        // Aquí deberías comparar la contraseña proporcionada con la almacenada.
        // Esto es solo un ejemplo y deberías usar una forma segura de almacenar y verificar contraseñas, como bcrypt.
        if (cliente.password !== password) {
            return res.status(401).json({ error: 'Invalid credentials', cliente: null });
        }
        res.json({ message: 'Login successful', cliente: cliente });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.actualizarContrasena = async (req, res) => {
    try {
        const { email, oldPassword, newPassword } = req.body;
        const cliente = await Cliente.findOne({ where: { email: email } });

        if (!cliente) {
            return res.status(404).json({ error: 'Cliente not found' });
        }

        // Verifica que la contraseña antigua sea correcta
        if (oldPassword !== cliente.password) {
            return res.status(401).json({ error: 'Invalid old password' });
        }

        // Actualiza la contraseña en la base de datos directamente sin hashear
        await Cliente.update({ password: newPassword }, { where: { email: email } });

        res.json({ message: 'Password updated successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const nodemailer = require('nodemailer');

function Codal(longitudCodigo) {
    const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    return generarCodigoAleatorio(longitudCodigo, caracteres);
}

function generarCodigoAleatorio(longitud, caracteres) {
    let resultado = '';
    const caracteresLength = caracteres.length;
    for (let i = 0; i < longitud; i++) {
        resultado += caracteres.charAt(Math.floor(Math.random() * caracteresLength));
    }
    return resultado;
}

exports.recuperar = async (req, res) => {
    try {
        const { email } = req.body; // Asumimos que solo necesitamos el email para este proceso
        const cliente = await Cliente.findOne({ where: { correo: email } });

        if (!cliente) {
            return res.status(404).json({ error: 'Cliente not found' });
        }

        // Genera una contraseña temporal
        const contrasenaTemporal = Codal(8);

        // Actualiza la contraseña en la base de datos con la temporal
        await Cliente.update({ password: contrasenaTemporal }, { where: { correo: email } });

        // Configura el transporte de nodemailer
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.CORREO, // Tu correo
                pass: process.env.PASSWORD, // Tu contraseña o token de app
            },
        });

        // Configura las opciones de correo
        let mailOptions = {
            from: process.env.CORREO,
            to: email,
            subject: 'Recuperacion de cuenta',
            text: `Tu contraseña temporal es: ${contrasenaTemporal}. Por favor, usa esta contraseña para iniciar sesión y luego cambia tu contraseña inmediatamente.`
        };

        // Envía el correo
        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
                res.status(500).json({ error: 'Error al enviar el correo' });
            } else {
                console.log('Correo enviado: ' + info.response);
                res.json({ message: 'Correo de recuperación enviado' });
            }
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};