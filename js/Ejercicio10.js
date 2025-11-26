// Ejercicio 10 – Validar contraseña fuerte con expresión regular
// Autora: Aleyda Quispe
const regexContrasena = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/;
// PRUEBAS
let contrasena1 = "Hola1234";   
let contrasena2 = "hola1234";  
let contrasena3 = "Holaabcd";  
let contrasena4 = "Ho12";      

console.log("Prueba 1:", regexContrasena.test(contrasena1)); 
console.log("Prueba 2:", regexContrasena.test(contrasena2));
console.log("Prueba 3:", regexContrasena.test(contrasena3));
console.log("Prueba 4:", regexContrasena.test(contrasena4));
