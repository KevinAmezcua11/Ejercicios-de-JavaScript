/* 
Ejercicio 12: Reducir un array.
Dado let precios = [10, 20, 30, 40], usa .reduce() para obtener el total de la suma de los precios.
*/

let precios = [10, 20, 30, 40];

let precio = precios.reduce((acumulador,n) => (acumulador+n),0);

console.log(precio);