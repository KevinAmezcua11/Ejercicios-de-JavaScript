/*
Ejercicio 8: Uso de objetos.
Crea un objeto persona con propiedades nombre, edad y profesión. Imprime su nombre.
*/

function objeto() {
    let persona = {
        nombre: "Adan",
        edad : 22,
        profesion : "ISC",
        imprimirN : function() { 
            console.log("Nombre: " + this.nombre);
        }
    }
    persona.imprimirN();
}

objeto();
