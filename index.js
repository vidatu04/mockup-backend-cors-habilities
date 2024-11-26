const express = require('express');
const cors = require('cors');
const connectDB = require('./Configuracion/db');
const proyectoJuventudRoutes = require('./Rutas/ProyectoJuventudRuta');

const app = express();

// Conectar a la base de datos
connectDB();

app.use((req, res, next) => {
    console.log(`Ruta: ${req.path}, Método: ${req.method}`);
    next();
  });
  

// Middleware
app.use(cors()); 
app.use(express.json());

// Rutas
app.use('/api/proyecto-juventud', proyectoJuventudRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));
