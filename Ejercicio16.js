/*
Ejercicio 16: Expresiones Regulares.
Crea una función que valide si una cadena de texto es un correo electrónico válido.
*/

function validarEmail(email) {
    const regex = /^[-\w,%+]{1,64}@(?:[A-Z0-9-]\.){1,125}[A-Z]{2,63}$/i;

    if(regex) {
        console.log("Email Valido");
    } else {
        console.log("Email Invalido");
    }
}

const email = prompt("Ingresa tu email: ");
validarEmail(email);