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

<!--funcion usuarios para agregarlos y valida los datos-->
function agregarUsuario(){

    let nombre = document.getElementById("nombre").value;
    let edad = document.getElementById("edad").value;
    let rol = document.getElementById("rol").value;

    if(!validarFormulario(nombre, edad, rol)){
        return;
    }

    let nuevoUsuario = {
        nombre: nombre,
        edad: Number(edad),
        rol: rol,
        activo: true
    };

    usuarios.push(nuevoUsuario);

    mostrarUsuarios(usuarios);

    limpiarFormulario();
}