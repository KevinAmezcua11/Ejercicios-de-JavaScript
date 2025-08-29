/*
Ejercicio 19: Simulación de un endpoint con fetch (JSONPlaceholder).
Usa fetch() para obtener información de https://jsonplaceholder.typicode.com/todos/1 y muestra el resultado en consola.
*/

fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(res => res.json())
    .then(data => console.log(data));