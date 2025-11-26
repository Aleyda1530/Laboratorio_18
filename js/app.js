// Ejercicio 9 – Archivo app.js
// Autora: Aleyda Quispe

import {multiplicar, dividir } from "./multiplicacionDivision.js";
import { sumar, restar } from "./sumaResta.js";
//Prueba
let a = 10;
let b = 2;
console.log("Resultados de las operaciones matemáticas:");
console.log("Suma:", sumar(a, b));
console.log("Resta:", restar(a, b));
console.log("Multiplicación:", multiplicar(a, b));

try {
    console.log("División:", dividir(a, b));
} catch (e) {
    console.log("Error en división:", e.message);
}
try {
    console.log("División (entre cero):", dividir(a, 0));
} catch (e) {
    console.log("Error en división:", e.message);
}





