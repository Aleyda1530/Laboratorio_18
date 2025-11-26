// Ejercicio 8 – Cargar usuario y mostrar datos en el DOM (Async/Await)
// Autora: Aleyda Quispe
const urlUsuario = "https://jsonplaceholder.typicode.com/users/2";
let botonCargar = document.querySelector("#botonCargar");
let contenedorDatos = document.querySelector("#datosUsuario");
async function cargarUsuario() {
    try{
        const respuesta = await fetch(urlUsuario);
        if(!respuesta.ok)
            throw new Error("Hubo un error al obtener usuario. Código: " + respuesta.status);
        const usuario = await respuesta.json();
        contenedorDatos.innerHTML = 
        `<p><strong>Nombre:</strong> ${usuario.name}</p>
        <p><strong>Email:</strong> ${usuario.email}</p>
        <p><strong>Ciudad:</strong> ${usuario.address.city}</p>`;
    } catch (e) {
        contenedorDatos.textContent = "Ocurrió un error: " + e.message;
    }
}
botonCargar.addEventListener("click", cargarUsuario);
