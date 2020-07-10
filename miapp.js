let boton = document.getElementById('boton');
let tareaNueva = document.getElementById('tareaNueva');

let listaTareas = document.getElementById('listaTareas');

boton.addEventListener('click', agregarTarea);
tareaNueva.addEventListener('keyup', function(e) {
    if (e.keyCode === 13) {
        agregarTarea();
    }
});

function agregarTarea() { //funcion para agregar li dentro del ul, con el contenido del input

    //hago una validacion para que el campo no este vacio 

    if (tareaNueva.value == "") {
        
        alert("El campo no puede estar vacio")

    } else {
        //1. creo elemento li
        let nuevoItem = document.createElement('li');

        //2. guardo el value del input dentro del li como texto
        nuevoItem.innerText = tareaNueva.value;

        //3. meto el li dentro del ul
        listaTareas.appendChild(nuevoItem);

        //final: limpiar input
        tareaNueva.value = "";
    }

}
