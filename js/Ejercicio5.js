// Ejercicio 5 – Listar nombres de usuarios usando fetch y promesas
// Autora: Aleyda Quispe
const urlUsuario = "https://jsonplaceholder.typicode.com/users";
function listarNombresUsuarios() {
    fetch(urlUsuario)
        .then(function(respuesta) {
            if(!respuesta)
                throw new Error("Error al obtener usuarios. Código: " + respuesta.status);
            return respuesta.json();
        })
        .then(function(usuarios) {
            console.log("Nombres de los usuarios: ");
            usuarios.forEach(function(usuario) {
                console.log(usuario.name);
            });
        })
        .catch(function(e) {
            console.error("Ocurrió un problema: ", e.message);
        });
}
listarNombresUsuarios();
