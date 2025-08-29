/**
 * 
Uso de async/await
Modifica la función del ejercicio anterior para que use async y await.


 */
const promesa = new Promise((res,rep) => {
    setTimeout(
        function devolverPromesa() {
            console.log("Promesa resulta");    
        }, 2000); 
});

async function ejecutarPromesa() {
    try {
        const resultado = await devolverPromesa();
        console.log(resultado)
    } catch (error) {
        console.error(error);
    }
}