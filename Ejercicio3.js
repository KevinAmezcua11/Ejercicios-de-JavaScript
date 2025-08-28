/*
Ejercicio 3:  Condicionales (if-else).
Escribe un programa que pregunte al usuario su edad y le diga si es mayor de edad (18 años o más) o no.
*/

let edad;

edad = parseInt(prompt("Ingrese su edad: "));

if(edad >= 18) {
    console.log("Eres MAYOR de edad.")
} else {
    console.log("Eres MENOR de edad.")
}