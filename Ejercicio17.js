/*
Ejercicio 17: Transformación de texto.
Dado un string "Hola, cómo estás?", conviértelo a mayúsculas y elimina las comas.
*/

let texto = "Hola, cómo estás?";
let textoMayus = texto.toUpperCase().replace(/,/g, '');

console.log(textoMayus);