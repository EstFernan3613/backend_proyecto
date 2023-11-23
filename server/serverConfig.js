const express = require('express');
const cors = require('cors');
const connectDB = require('../database/db');
const userRoutes = require('../routes/userRoutes');
const authRoutes = require('../routes/authRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Conexión a la base de datos
connectDB();

// Rutas
app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);

// Puerto
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor en ejecución en el puerto ${PORT}`);
});
