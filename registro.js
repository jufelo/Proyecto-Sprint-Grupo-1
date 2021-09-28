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
}

function  ordenarArreglo(){

    arreglo.sort(function (a, b) {
        if (a.apellido > b.apellido) {
          return 1;
        }
      if (a.apellido < b.apellido) {
          return -1;
      }
        return 0;
      });
      console.table(arreglo);
}

function filtrarCorreo(){
    
    filtro = arreglo.filter(function (email) {
        return email.correo.endsWith('gmail.com');
      });
      console.log(filtro);
}

/*
module.exports = agregarRegistro;
module.exports = ordenarArreglo;
module.exports = filtrarCorreo;
*/

module.exports = {agregarRegistro, ordenarArreglo, filtrarCorreo};
