// Ejercicio 4 – Obtener usuario con async/await
// Autora: Aleyda Quispe
const urlUsuario = "https://jsonplaceholder.typicode.com/users/5";
async function obtenerUsuario() {
    try {
        const respuesta = await fetch(urlUsuario);
        if(!respuesta.ok)
            throw new Error("Hubo un error al obtener los datos. Codigo: " + respuesta.status);
        const datos = await respuesta.json();
        console.log("Usuario obtenido (async/await):");
        console.log("Nombre:", datos.name);
        console.log("Teléfono:", datos.phone);
        console.log("Sitio web:", datos.website);
    } catch(e) {
        console.error("Ocurrió un problema: ", e.message);
    }
}
obtenerUsuario();