const express = require('express');
const { create, getById, edit, remove, getAll } = require('../Http/ProyectoJuventudHttp');

const router = express.Router();

router.post('/crear', create);
router.get('/buscar/:id',getById);
router.put('/editar/:id', edit);
router.delete('/eliminar/:id', remove);
router.get('/todos', getAll);
router.post('/login', (req, res) => {
    const { usuario, contraseña } = req.body;
})  
module.exports = router;
