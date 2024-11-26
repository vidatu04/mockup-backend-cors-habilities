//usuario y contraseña predeterminada
const usuariosAdmin = "admin" ;
const contraseñaAdmin = "admin";


// Función para realizar el login
function login(usuario, contraseña) {
    if (usuario === usuariosAdmin && contraseña === contraseñaAdmin) {
        return true;
    } else {
        return false;
    }
}
login("admin","admin");