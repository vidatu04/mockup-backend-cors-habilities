const express = require('express');
const cors = require('cors');
const connectDB = require('./Configuracion/db');
const proyectoJuventudRoutes = require('./Rutas/ProyectoJuventudRuta');

const app = express();

// Conectar a la base de datos
connectDB();

// Usuario y contraseña predeterminada para el login
const usuariosAdmin = "admin";
const contraseñaAdmin = "admin";

// Función para realizar el login
function login(usuario, contraseña) {
    if (usuario === usuariosAdmin && contraseña === contraseñaAdmin) {
        return true;
    } else {
        return false;
    }
}

app.use((req, res, next) => {
    console.log(`Ruta: ${req.path}, Método: ${req.method}`);
    next();
});

// Middleware
const corsOptions = {
  origin: ['http://127.0.0.1:5500', 'http://localhost:5000'], // Cambia esto al dominio que necesite acceso
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Métodos permitidos
  allowedHeaders: ['Content-Type', 'Authorization'], // Encabezados permitidos
  credentials: true, // Habilitar si envías cookies o autenticación
};

app.use(cors(corsOptions));

app.use(express.json());

// Ruta para el login
app.post('/api/login', (req, res) => {
    const { usuario, contraseña } = req.body;

    // Validar las credenciales
    if (login(usuario, contraseña)) {
        // Si el login es exitoso
        res.status(200).json({ message: 'Autenticación exitosa' });
    } else {
        // Si las credenciales son incorrectas
        res.status(401).json({ message: 'Usuario o contraseña incorrectos' });
    }
});

// Rutas adicionales
app.use('/api/proyecto-juventud', proyectoJuventudRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));
