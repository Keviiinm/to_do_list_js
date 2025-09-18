
// *CREAMOS LAS CONSTANTES PARA LOS ELEMENTOS PRINCIPALES

const input = document.getElementById ("to-do-input");
const addBtn = document.getElementById("add-btn");
const toDoList = document.getElementById("cont-to-do-list");
const completedToDoList = document.getElementById("cont-completed-list");



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
        eventsToItem(newItem);
        input.value = "";
    }

    // *LA SIGUIENTE FUNCION NOS PERMITIRA AGREGAR EL FUNCIONAMIENTO PRINCIPAL SOBRE LAS TAREAS ES DECIR MARCAR LA TAREA COMO COMPLETADA O EN DADO CASO ELIMINARLA

})

function eventsToItem(item){
    // *UTILIZAMOS EL QUERY SELECTOR PARA CAPTURAR EL INPUT Y BUTTON QUE ESTEN ADENTRO
    const checkbox = item.querySelector('input');
    const deleteBtn = item.querySelector('button');

    // *COMPLETAR LA TAREA
    checkbox.addEventListener('change', ()=>{
        if (checkbox.checked) {
            completedToDoList.appendChild(item);
            
        }else{
            toDoList.appendChild(item);
        }
    });
    
    // evento de eliminar
    deleteBtn.addEventListener('click', ()=>{
        item.remove()
    })
    

    
    
}
// *Detectamos la tecla Enter en el input para agregar tarea
input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        const textoItem = input.value.trim();
        if (textoItem == "") {
            alert("no se puede crear una tarea vacia")
        } else {
            const newItem = createToDoItem(textoItem);
            toDoList.appendChild(newItem);
            eventsToItem(newItem);
            input.value = "";
        }
    }
});


const btnStyles = document.getElementById('change-styles')
btnStyles.addEventListener('click', ()=>{
    const linkCss = document.getElementById('enlace-estilos')

    if (linkCss.getAttribute('href') === 'css/style.css') {
        linkCss.setAttribute('href', 'css/style-noche.css')    
        btnStyles.textContent = "Modo Dia"
    }else{
        linkCss.setAttribute('href', 'css/style.css')    
        btnStyles.textContent = 'Modo noche'
    }

    
})

