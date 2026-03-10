const contactMessageService = require('../../services/contactMessage.service');
const nodemailer = require('nodemailer');

const getAll = async (req, res) => {
  try {
    const messages = await contactMessageService.findAll();
    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteOne = async (req, res) => {
  try {
    const { id } = req.params;
    await contactMessageService.delete(id);
    res.status(204).send();
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const create = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Validación básica (opcional pero recomendable)
    if (!name || !email || !message) {
      return res.status(400).json({ message: 'Todos los campos son requeridos' });
    }

    // 1. Guardar en la base de datos
    const newMessage = await contactMessageService.create({ name, email, message });

    // 2. Enviar email
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST || 'smtp.gmail.com',
      port: process.env.EMAIL_PORT || 587,
      secure: process.env.EMAIL_SECURE === 'true' || false,
      auth: {
        user: process.env.EMAIL_USER || 'shilicolateoficial@gmail.com',
        pass: process.env.EMAIL_PASS,  // ← App Password de Gmail
      },
    });

    const mailOptions = {
      from: `"Sitio Web Shilicolate" <${process.env.EMAIL_USER || 'shilicolateoficial@gmail.com'}>`,
      to: 'shilicolateoficial@gmail.com',  // ← ¡Aquí va el correo destino que quieres!
      replyTo: email,  // Permite responder directamente al que escribió
      subject: `Nuevo mensaje de contacto: ${name}`,
      text: `Nombre: ${name}\nEmail: ${email}\n\nMensaje:\n${message}\n\nEnviado desde: ${req.headers.origin || 'desconocido'}`,
    };

    await transporter.sendMail(mailOptions);

    res.status(201).json({
      success: true,
      message: 'Mensaje enviado y guardado correctamente',
      data: newMessage,
    });
  } catch (error) {
    console.error('Error en create contact:', error);
    res.status(500).json({ message: error.message || 'Error al procesar el mensaje' });
  }
};

module.exports = {
  getAll,
  deleteOne,
  create,
};