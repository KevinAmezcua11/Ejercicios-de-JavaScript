/*
Ejercicio 9: Manipulación de objetos.
Agrega una nueva propiedad nacionalidad al objeto persona del ejercicio anterior y muéstrala en consola.
*/

function objeto(){
    let persona = {
        nombre: "Adan",
        edad : 22,
        profesion : "ISC",
        nacionalidad: "Mexicana",
        imprimirN : function() { 
            console.log("Nacionalidad: " + this.nacionalidad);
        }
    }
    persona.imprimirN();
}

objeto();