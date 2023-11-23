const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('tu_url_de_conexion_a_la_base_de_datos', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Conexión exitosa a la base de datos');
  } catch (error) {
    console.error('Error al conectar a la base de datos:', error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
