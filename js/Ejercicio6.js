// Ejercicio 6 – Listar nombres de usuarios usando fetch con async/await
// Autora: Aleyda Quispe
const urlUsuarios = "https://jsonplaceholder.typicode.com/users";
async function listarNombresUsuarios() {
    try {
        const respuesta = await fetch(urlUsuarios);
        if(!respuesta.ok)
            throw new Error("Hubo un error al obtener usuarios. Código: " + respuesta.status);
        const usuarios = await respuesta.json();
        console.log(" Nombres de los usuarios (async/await): ");
        usuarios.forEach(function(usuario){
            console.log(usuario.name);
        });
    } catch(e) {
        console.log("Ocurrio un problema: ", e.message);
    }
}
listarNombresUsuarios();