/*
Ejercicio 11: Mapear un array.
Dado let numeros = [1, 2, 3, 4, 5], usa .map() para obtener un nuevo array donde cada número esté elevado al cuadrado.
*/

let numeros = [1, 2, 3, 4, 5]

let numero = numeros.map((num) => Math.pow(num,2));

console.log("Elevados al cuadrado = " + numero);