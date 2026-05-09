<!--arreglo vacio para crear usuarios--> 

let usuarios = [];

<!--validamos los campos que se ingresan en el formulario creado en index--> 

function validarFormulario(nombre, edad, rol){

    if(nombre === "" || edad === "" || rol === ""){
        alert("Todos los campos son obligatorios");
        return false;
    }

    if(edad <= 0){
        alert("La edad debe ser mayor a 0");
        return false;
    }

    return true;
}