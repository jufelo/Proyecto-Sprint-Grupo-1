function agregarRegistro() {
    arreglo = {nombre: document.getElementById("nombre").value, apellido: document.getElementById("apellido").value, telefono: document.getElementById("telefono"), correo: document.getElementById("correo")};
    arreglo.push(arreglo);
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
