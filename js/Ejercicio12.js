// Ejercicio 12 – Quitar etiquetas HTML usando expresión regular
// Autora: Aleyda Quispe
const regexEtiquetas = /<.*?>/g;
let texto ="<h1>Hola</h1> <p>Esto es <strong>un ejemplo</strong>.</p>";
let textoLimpio = texto.replace(regexEtiquetas, "");

console.log("Texto original:");
console.log(texto);
console.log("Texto sin etiquetas HTML:");
console.log(textoLimpio);