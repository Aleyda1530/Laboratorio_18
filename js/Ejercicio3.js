// Ejercicio 3 – Obtener usuario con fetch y promesas
// Autora: Aleyda Quispe

const urlUsuario = "https://jsonplaceholder.typicode.com/users/10";
function obtenerUsuario(){
    fetch(urlUsuario)
        .then(function(respuesta){
            if(!respuesta.ok)
                throw new Error("Hubo un error al obtener los datos. Código: " + respuesta.status);
            return respuesta.json();
        })
        .then(function(datos) {
            console.log("Usuario obtenido con promesas: ");
            console.log("Nombre: " + datos.name);
            console.log("Nombre de usuario:", datos.username);
            console.log("Correo:", datos.email);
        })
        .catch(function(e){
            console.log("Ocurrió un problema: ", e.message);
        }) 
}
obtenerUsuario();