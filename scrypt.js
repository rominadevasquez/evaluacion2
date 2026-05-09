<!--arreglo vacio para crear usuarios--> 

let usuarios = [];

//validamos los campos que se ingresan en el formulario creado en index 

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

//funcion usuarios para agregarlos y valida los datos
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



//funcion mostrar usuarios para que los muestre en pantalla
function mostrarUsuarios(lista){

    let tabla = document.getElementById("tablaUsuarios");

    tabla.innerHTML = "";

    lista.forEach((usuario, index) => {

        let fila = document.createElement("tr");

        fila.innerHTML = `
            <td>${usuario.nombre}</td>
            <td>${usuario.edad}</td>
            <td>${usuario.rol}</td>
            <td>
                ${usuario.activo ? "Activo" : "Inactivo"}
            </td>

            <td>

                <button class="btn btn-warning btn-sm"
                onclick="cambiarEstado(${index})">

                Cambiar Estado
                </button>

                <button class="btn btn-danger btn-sm"
                onclick="eliminarUsuario(${index})">

                Eliminar
                </button>

            </td>
        `;

        tabla.appendChild(fila);

    });

    contarUsuarios();


 <!--funcion cambio de estado-->   

    function cambiarEstado(index){

    usuarios[index].activo = !usuarios[index].activo;

    mostrarUsuarios(usuarios);
}

//funcion filtrado de usuarios que los mostrara de acuerdo al rol
function filtrarUsuarios(){

    let filtro = document.getElementById("filtro").value;

    if(filtro === "Todos"){
        mostrarUsuarios(usuarios);

    }else{

        let filtrados = usuarios.filter(usuario =>
            usuario.rol === filtro
        );

        mostrarUsuarios(filtrados);
    }
}



//funcion contador de usuarios
function contarUsuarios(){

    let activos = usuarios.filter(usuario => usuario.activo).length;

    let inactivos = usuarios.filter(usuario => !usuario.activo).length;

    document.getElementById("contadorActivos").innerText =
    "Usuarios activos: " + activos;

    document.getElementById("contadorInactivos").innerText =
    "Usuarios inactivos: " + inactivos;
}



//funcion ordenar por edad, limpiar y eliminar usuarios

function ordenarPorEdad(){

    usuarios.sort((a, b) => a.edad - b.edad);

    mostrarUsuarios(usuarios);
}

function eliminarUsuario(index){

    usuarios.splice(index, 1);

    mostrarUsuarios(usuarios);
}

function limpiarFormulario(){

    document.getElementById("nombre").value = "";
    document.getElementById("edad").value = "";
    document.getElementById("rol").value = "";
}