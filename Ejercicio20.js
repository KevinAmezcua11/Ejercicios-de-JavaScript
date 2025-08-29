/*
Ejercicio 20: Creación de un pequeño CRUD en memoria.
Crea un array llamado tareas que almacene objetos { id, descripcion, completado }. Agrega funciones para:
    - Agregar una tarea.
    - Eliminar una tarea por id.
    - Marcar una tarea como completada.
*/

const tareas = [
    {
        id: 1,
        descripcion: "Ejercicios JS",
        completado: false
    }
]

function agregarTarea(descripcion) {
    const nuevaTarea = {
        id: tareas.length > 0 ? tareas[tareas.length - 1].id + 1 : 1, // autoincremental
        descripcion: descripcion,
        completado: false
    };
    tareas.push(nuevaTarea);
    console.log("Tarea agregada:", nuevaTarea);
}

function eliminarTarea(id) {
    const indice = tareas.findIndex(tarea => tarea.id === id);
    if (indice !== -1) {
        const eliminada = tareas.splice(indice, 1);
        console.log("Tarea eliminada:", eliminada[0]);
    } else {
        console.log("Tarea NO encontrada. id:", id);
    } 
}

function marcarTarea(id) {
    const tarea = tareas.find(t => t.id === id);
    if (tarea) {
        tarea.completado = true;
        console.log("Tarea completada:", tarea);
    } else {
        console.log("Tarea NO encontrada. id:", id);
    }
}

agregarTarea("Subir Archivos js");
marcarTarea(2);
eliminarTarea(1)