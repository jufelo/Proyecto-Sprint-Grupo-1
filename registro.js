function agregarRegistro() {

    nombre = document.getElementById("nombre").value;
    apellido = document.getElementById("apellido").value;
    telefono = document.getElementById("telefono").value;
    correo = document.getElementById("correo").value;

    // añade registro al arreglo
    registro = {Nombre: nombre, Apellido: apellido, Telefono: telefono, Correo: correo};
    arreglo.push (registro);

    // Opcional Sprint 3. objeto console para imprimir el contenido que se está ingresando en el arreglo.
    console.table(registro);
    return arreglo;
}

function  ordenarArreglo(){

}

function filtrarCorreo(){

}
/*
module.exports = agregarRegistro;
module.exports = ordenarArreglo;
module.exports = filtrarCorreo;
*/

module.exports = {agregarRegistro, ordenarArreglo, filtrarCorreo};
