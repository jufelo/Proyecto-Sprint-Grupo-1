var arreglo = [];


class registro{
  

  constructor(Nombre, Apellido, Telefono, Correo, Contrasena){
  this.nombre = Nombre;
  this.apellido = Apellido;
  this.telefono = Telefono;
  this.correo = Correo;
  this.contrasena = Contrasena;
  }}


function agregarRegistro() {
  nombre = document.getElementById("nombre").value;
  apellido = document.getElementById("apellido").value;
  telefono = document.getElementById("telefono").value;
  correo = document.getElementById("correo").value;
  contrasena = document.getElementById("contrasena").value;
  // añade registro al arreglo
  
  
  // registro = {Nombre: nombre, Apellido: apellido, Telefono: telefono, Correo: correo, Contrasena: contrasena};
  var registros = new registro(nombre,apellido,telefono,correo,contrasena);
  arreglo.push (registros);
  
  print(registros);

  // Opcional Sprint 3. objeto console para imprimir el contenido que se está ingresando en el arreglo.
  console.log(arreglo);
  console.log(arreglo.length);
  
}

function  ordenarArreglo(arreglo){

    arreglo.sort(function (a, b) {
        if (a.Apellido> b.Apellido) {
          return 1;
          
        }
      if (a.Apellido < b.Apellido) {
          return -1;
      }
        return 0;
      });
      return arreglo;
      
      console.table(arreglo);
      
}

function filtrarCorreo(arreglo){
    
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


