// Ejercicio 14 – Detectar fechas en formato dd/mm/yyyy usando expresión regular
// Autora: Aleyda Quispe

const regexFecha = /(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}/g;
let texto = "Mis fechas importantes son: 15/10/2005, 31/10/2008 y la incorrecta 40/20/3000.";
let fechasEncontradas = texto.match(regexFecha);

console.log("Texto original:");
console.log(texto);
console.log("Fechas válidas encontradas:");
console.log(fechasEncontradas);
