const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const { swaggerUi, specs } = require('./swagger/swaggerDoc');
const authRoutes = require('./routes/authRoutes');
const qrRoutes = require('./routes/qrRoutes');
const eventRoutes = require('./routes/eventRoutes');
const db = require('./config/db');

const app = express();

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/qr', qrRoutes);
app.use('/api/events', eventRoutes);

// Swagger Documentation
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

// Start Server
app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
