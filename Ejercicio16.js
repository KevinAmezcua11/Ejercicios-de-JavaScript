/*
Ejercicio 16: Expresiones Regulares.
Crea una función que valide si una cadena de texto es un correo electrónico válido.
*/

function validarEmail(email) {
    const regex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/

    if(regex.test(email)) {
        console.log("El correo " + email + " es VALIDO.");
    } else {
        console.log("El correo " + email + " es INVALIDO.");
    }
}

const email = prompt("Ingresa tu email: ");
validarEmail(email);