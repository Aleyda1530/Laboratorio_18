// Ejercicio 9 – Archivo multiplicacionDivision.js
// Autora: Aleyda Quispe

export function multiplicar(a, b) {
    return a*b;
}
export function dividir(a, b){
    if (b === 0)
        throw new Error("No es posible dividir entre cero");
    return a/b;
}
