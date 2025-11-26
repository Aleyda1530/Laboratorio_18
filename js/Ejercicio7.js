// Ejercicio 7 – Cargar usuario y mostrar datos en el DOM (Promesas)
// Autora: Aleyda Quispe
const urlUsuario = "https://jsonplaceholder.typicode.com/users/2";
let botonCargar = document.querySelector("#botonCargar");
let contenedorDatos = document.querySelector("#datosUsuario");
function cargarUsuario() {
    fetch(urlUsuario)
        .then(function(respuesta) {
            if (!respuesta.ok) 
                throw new Error("Hubo un error al obtener el usuario. Código: " + respuesta.status);
            return respuesta.json();
        })
        .then(function(usuario) {
            contenedorDatos.innerHTML = `
                <p><strong>Nombre:</strong> ${usuario.name}</p>
                <p><strong>Email:</strong> ${usuario.email}</p>
                <p><strong>Ciudad:</strong> ${usuario.address.city}</p>
            `;
        })
        .catch(function(error) {
            contenedorDatos.textContent = "Ocurrió un error: " + error.message;
        });
}
botonCargar.addEventListener("click", cargarUsuario);
