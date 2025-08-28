/*
Ejercicio 5: Funciones básicas.
Escribe una función llamada saludar(nombre) que reciba un nombre y 
devuelva un mensaje de saludo, por ejemplo: "Hola, Juan".
*/

function saludar(nombre) {
    console.log("Hola " + nombre)
}

let nombre;

nombre = prompt("Ingrese su nombre: ");

saludar(nombre);