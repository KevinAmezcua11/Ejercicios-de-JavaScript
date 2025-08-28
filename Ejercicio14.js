/*
Ejercicio 14: Manejo de Promesas.
Crea una función que devuelva una promesa que se resuelva después de 2 segundos con el mensaje "Promesa resuelta".
*/

const promesa = new Promise((res,rep) => {
    setTimeout(
        function devolverPromesa() {
            console.log("Promesa resulta");    
        }, 2000); 
});

promesa.then((val) =>  console.log("Promesa resulta", val));