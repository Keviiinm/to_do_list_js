
// *CREAMOS LAS CONSTANTES PARA LOS ELEMENTOS PRINCIPALES

const input = document.getElementById ("to-do-input");
const addBtn = document.getElementById("add-btn");
const toDoList = document.getElementById("cont-to-do-list");
const completedToDoList = document.getElementById("completed");



// *CREAMOS LA FUNCION QUE NOS PERMITA CREAR UNA NUEVA TAREA APARTIR DEL FORMULARIO
// *TODA ETIQUETA QUE VAMOS ACREAR ES APARTIR DE LA MAQUETA HTML PRE EXISTENTE

function createToDoItem(textoItem){

    // *creamos el nodo o elemento padre
    const item = document.createElement("div")
    item.classList.add ("item-to-do")
    // *creamos el nodo hijo del input y le agregamos el type 
    const checkBox = document.createElement("input")
    checkBox.type ="checkbox"
    // *creamos el siguiente nodo hijo parrafo
    // *A este parrafo le asigno el valor del argumento de la funcion es decir lo que escribe el ususario en el campo
    const p = document.createElement ("p")
    p.textContent = textoItem
    // *creamos el ultimo nodo hijo para eliminar
    const deleteBtn = document.createElement ("button")
    deleteBtn.textContent = "x";
    // *ensamblamos dentro del nodo padre sus nodos hijos, es decir la estructura de la tarea
    item.appendChild(checkBox);
    item.appendChild(p);
    item.appendChild(deleteBtn);

    // *utilizamos el return para dar respuesta del elemento creado ya que lo usaremos para otra funcion mas adelante
    return item;
}
// *detectamos el evento click sobre el boton agregar con un evento de escucha o listenner
// *Para que apartir de este evento se agregue la tarea dentro del contenedor cont-to-do-list

addBtn.addEventListener ('click', ()=>{
    const textoItem = input.value.trim();
    if (textoItem == "") {
        alert("no se puede crear una tarea vacia")
    }else{
        const newItem = createToDoItem(textoItem);
        toDoList.appendChild(newItem);
        input.value = "";
    }
});


