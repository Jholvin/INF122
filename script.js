function agregarTarea()
{
    var tarea = document.getElementById("nueva-tarea").value /*el value saca el valor del input/*/
    var nuevoItem = document.createElement("li");

    nuevoItem.textContent=tarea;
    document.getElementById("tarea-lista").appendChild(nuevoItem); /*append=agregar  child=niño xD/*/
    document.getElementById("nueva-tarea").value="";
}