// Ejercicio 11 – Encontrar URLs seguras (https) con expresión regular
// Autora: Aleyda Quispe

const regexUrlSegura = /https:\/\/[^\s]+/g;
let texto = `
Visita mi primera página https://www.midominio.com para más información.
También puedes acceder a http://inseguro.com pero no es segura.
Otra opción es https://plataforma.com/IDWEB/javascript.
`;

let urlsEncontradas = texto.match(regexUrlSegura);
console.log("Las URLs seguras encontradas:");
console.log(urlsEncontradas);