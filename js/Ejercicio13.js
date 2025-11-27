// Ejercicio 13 – Dividir un texto en oraciones usando expresión regular
// Autora: Aleyda Quispe
const regexOraciones = /[^.!?]+/g;
let texto = "Hola, Como estas? Bien!";
let oraciones = texto.match(regexOraciones);
console.log("Texto original: ");
console.log(texto);
console.log("División en oraciones: ");
console.log(oraciones);
